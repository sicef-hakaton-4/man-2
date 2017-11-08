using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class Candidate: ApplicationUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Points { get; set; } 
        public byte[] CV { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Technology> Technologies { get; set; }
        public virtual ICollection<Job> Jobs { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
        public virtual ICollection<Point> Marks { get; set; }
       
    }
}