using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using TextSimplification.Models;
using Microsoft.Extensions.Logging;

namespace TextSimplification.Services
{
    public class TextSimplificationService : ITextSimplificationService
    {
        private class HuggingFaceResponse
{
    public string? generated_text { get; set; }
}


        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        private readonly ILogger<TextSimplificationService> _logger;
        private const string MODEL_ID = "google/flan-t5-large";

        public TextSimplificationService(
            HttpClient httpClient,
            IConfiguration configuration,
            ILogger<TextSimplificationService> logger)
        {
            _httpClient = httpClient;
            _configuration = configuration;
            _logger = logger;

            _httpClient.BaseAddress = new Uri("https://api-inference.huggingface.co/models/");
            var apiKey = _configuration["HuggingFace:ApiKey"];
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        }

        public async Task<TextSimplificationResponse> SimplifyTextAsync(TextSimplificationRequest request)
        {
            try
            {
                var prompt = GeneratePrompt(request.Text, request.Level);
               var payload = new { 
    inputs = prompt, 
parameters = new 
{ 
    max_length = 500,
    min_length = 100,
    temperature = 0.1,
    do_sample = false,
    top_p = 0.9
}

};


                _logger.LogInformation($"Sending request to Hugging Face API with prompt: {prompt}");

                var response = await _httpClient.PostAsync(
                    MODEL_ID,
                    new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json")
                );

                response.EnsureSuccessStatusCode();
                var jsonResponse = await response.Content.ReadAsStringAsync();
                _logger.LogInformation($"API Response: {jsonResponse}");
                Console.WriteLine($"\nSimplified Text Response:\n{jsonResponse}\n");

                var apiResponse = JsonSerializer.Deserialize<HuggingFaceResponse[]>(jsonResponse);
                
                if (apiResponse != null && apiResponse.Length > 0)
                {
                    var simplifiedText = apiResponse[0].generated_text?.Trim();
                    if (!string.IsNullOrEmpty(simplifiedText))
                    {
                        return new TextSimplificationResponse
                        {
                            SimplifiedText = simplifiedText,
                            Level = request.Level
                        };
                    }
                }

                _logger.LogWarning($"Unexpected response format: {jsonResponse}");
                return new TextSimplificationResponse
                {
                    SimplifiedText = "Unable to simplify text. Please try again.",
                    Level = request.Level
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while simplifying text");
                throw;
            }
        }

        private string GeneratePrompt(string text, ReadingLevel level)
{
    // Each case should be a fully-formed multi-line string (verbatim string)
    // that ends with "Text to explain:" for consistency.
var readingLevelPrompt = level switch
{
    ReadingLevel.Child =>
@"Rewrite this text for a young child (age 8-12):
1. Use simple words like 'big', 'small', 'join', 'move'
2. Use examples like 'magnets sticking together'
3. Explain hard words in [brackets]
4. Make it fun

Text to explain:",

    ReadingLevel.Teen =>
@"Rewrite this for a teenager (age 13-17):
1. Use everyday words and explain science terms
2. Use examples from phones or computers
3. Keep it interesting and clear

Text to explain:",

    ReadingLevel.Adult =>
@"Rewrite this for a general adult audience:
1. Use clear language with brief explanations
2. Include helpful examples
3. Keep technical terms but explain them

Text to explain:",

    ReadingLevel.Expert =>
@"Rewrite this for an expert audience:
1. Keep all technical terms
2. Include theoretical context
3. Focus on scientific accuracy

Text to explain:",

    _ => @"Rewrite this text in a simpler way:"
};


    return $"{readingLevelPrompt}\n\n{text}\n\nSimplified explanation:";
}

    }
}
