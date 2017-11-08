using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Hakaton.Web.Models
{
    public class Message
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }

        public string SenderId { get; set; }
        [ForeignKey ("SenderId")]
        public virtual ApplicationUser Sender { get; set; }

        public string ReceiverId { get; set; }
        [ForeignKey("ReceiverId")]
        public virtual ApplicationUser Receiver { get; set; }

        public DateTime Time { get; set; }

        public bool Opened { get; set; }
    }
}