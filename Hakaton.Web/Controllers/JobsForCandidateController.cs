using Hakaton.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hakaton.Web.Controllers
{
    public class JobsForCandidateController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetJobsForCandidate(string id)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            Candidate cand = db.Candidates.Find(id);
            List<Job> jobs = db.Jobs.Where(j => j.MinPoints < cand.Points).ToList();
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
            db.Dispose();
            return Ok(data);
        }
    }
}
