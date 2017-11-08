using Hakaton.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hakaton.Web.Controllers
{
    public class JobsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetConcreteJob(int id)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            Job job = db.Jobs.Find(id);
            var data = new
            {
                id = job.Id,
                name = job.Name,
                type = job.Type,
                minPoints = job.MinPoints,
                startAt = job.StartAt,
                finishAt = job.FinishAt,
                workFromHome = job.WorkFromHome,
                salary = job.Salary,
                teamSize = job.TeamSize,
                employer = new
                {
                    name = job.Employer.Name,
                    linkToWebsite = job.Employer.LinkToWebsite,
                    staff = job.Employer.Staff,
                    teamSize = job.Employer.Place
                },
                technologies = job.Technologies.Select(te => new
                {
                    name = te.Name
                }
                    ).ToList()
            };
            db.Dispose();
            return Ok(data);
        }

    }

}
