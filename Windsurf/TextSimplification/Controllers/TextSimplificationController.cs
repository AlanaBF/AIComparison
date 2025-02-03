using Microsoft.AspNetCore.Mvc;
using TextSimplification.Models;
using TextSimplification.Services;

namespace TextSimplification.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TextSimplificationController : ControllerBase
    {
        private readonly ITextSimplificationService _simplificationService;
        private readonly ILogger<TextSimplificationController> _logger;

        public TextSimplificationController(
            ITextSimplificationService simplificationService,
            ILogger<TextSimplificationController> logger)
        {
            _simplificationService = simplificationService;
            _logger = logger;
        }

        [HttpPost("simplify")]
        public async Task<ActionResult<TextSimplificationResponse>> SimplifyText([FromBody] TextSimplificationRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Text))
                {
                    return BadRequest("Text cannot be empty");
                }

                var result = await _simplificationService.SimplifyTextAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing text simplification request");
                return StatusCode(500, "An error occurred while processing your request");
            }
        }
    }
}
