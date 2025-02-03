namespace TextSimplification.Models
{
    public class TextSimplificationRequest
    {
        public required string Text { get; set; }
        public ReadingLevel Level { get; set; }
    }

    public enum ReadingLevel
    {
        Child,
        Teen,
        Adult,
        Expert
    }
}
