using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class Employer: ApplicationUser
    {
        public string Name { get; set; }
        public string LinkToWebsite { get; set; }
        public int Staff { get; set; }
        public string Place { get; set; }

        public virtual ICollection<Point> Marks { get; set; }
        public virtual ICollection<Job> Jobs { get; set; }
        public virtual ICollection<JobApplication> JobApplications { get; set; }
    }
}