using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class Point
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int Value { get; set; }

        public string CandidateId { get; set; }
        [ForeignKey("CandidateId")]
        public virtual Candidate Candidate { get; set; }

        public string EmployerId { get; set; }
        [ForeignKey("EmployerId")]
        public virtual Employer Employer {get; set;}

        public int TechnologyId { get; set; }
        [ForeignKey("TechnologyId")]
        public virtual Technology Technology { get; set; }

    }
}