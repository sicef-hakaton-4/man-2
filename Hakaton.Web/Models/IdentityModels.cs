using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace Hakaton.Web.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public string LinkedId { get; set; }
        public string Picture { get; set; }
        public bool Online { get; set; }

        [InverseProperty("Sender")]
        public virtual ICollection<Message> MessagesFrom { get; set; }

        [InverseProperty("Receiver")]
        public virtual ICollection<Message> MessagesTo { get; set; }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("BazaHakaton1", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public virtual DbSet<Candidate> Candidates { get; set; }
        public virtual DbSet<Employer> Employers { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<Message> Messages { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Point> Points { get; set; }
        public virtual DbSet<Technology> Technologies { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
    }
}