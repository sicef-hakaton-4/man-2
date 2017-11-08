using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class Job
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
        public  TimeType Type { get; set; }
        public int MinPoints { get; set; }
        public int StartAt { get; set; }   //u kolko sati pocinje
        public int FinishAt { get; set; }    //u koliko sati zavrsava
        public int WorkFromHome { get; set; }  //0 znaci da radi od kuce, vise da radi na pooslu zadati broj sati
        public int Salary { get; set; }  //racuna se u evrima
        public int TeamSize { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }

        public string EmployerId { get; set; }
        [ForeignKey("EmployerId")]
        public virtual Employer Employer { get; set; }

        public virtual ICollection<Technology> Technologies { get; set; }
        public virtual ICollection<JobApplication> JobApplications { get; set; }
    }

    public enum TimeType
    {
        PartTime,
        FullTime
    }
}