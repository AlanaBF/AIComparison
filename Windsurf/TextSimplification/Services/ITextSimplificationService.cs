using TextSimplification.Models;

namespace TextSimplification.Services
{
    public interface ITextSimplificationService
    {
        Task<TextSimplificationResponse> SimplifyTextAsync(TextSimplificationRequest request);
    }
}
