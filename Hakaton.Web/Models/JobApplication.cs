using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class JobApplication
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int JobId { get; set; }
        [ForeignKey("JobId")]
        public virtual Job Job { get; set; }

        public string CandidateId { get; set; }
        [ForeignKey("CandidateId")]
        public virtual Candidate Candidate { get; set; }

        public DateTime Time { get; set; }
    }
}