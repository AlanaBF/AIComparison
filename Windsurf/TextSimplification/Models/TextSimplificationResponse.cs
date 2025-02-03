namespace TextSimplification.Models
{
    public class TextSimplificationResponse
    {
        public required string SimplifiedText { get; set; }
        public ReadingLevel Level { get; set; }
    }
}
