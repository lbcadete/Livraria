using Microsoft.EntityFrameworkCore;

namespace Livraria.Models
{
    public class LivroContext : DbContext
    {
        public LivroContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Livro> Livro { get; set; }
    }
}
