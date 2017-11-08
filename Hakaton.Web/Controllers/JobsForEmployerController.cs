using Hakaton.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hakaton.Web.Controllers
{
    public class JobsForEmployerController : ApiController
    {
        [HttpGet]
        public IHttpActionResult JobsForEmployer(string id)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            //Employer em = db.Employers.Find(id);
            List<Job> jobs = db.Jobs.Where(jb => jb.EmployerId == id).ToList();
            var data = jobs.Select(job => new
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
                }
            }).ToList();
            return Ok(data);
        }
    }
}
