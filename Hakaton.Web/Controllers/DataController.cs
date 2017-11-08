using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Hakaton.Web.Models;

namespace Hakaton.Web.Controllers
{
    public class DataController : ApiController
    {
        private ApplicationDbContext dbContext;

        public DataController()
        {
            dbContext = new ApplicationDbContext();
        }

        [HttpGet]  //http://localhost:54270/api/Data
        public IHttpActionResult Candidates()
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                var data = db.Candidates.Select(cand => new
                {
                    id = cand.Id,
                    firstName = cand.FirstName,
                    lastName = cand.LastName,
                    points = cand.Points,
                    cv = cand.CV,
                    desription = cand.Description,
                    linkedId = cand.LinkedId,
                    picture = cand.Picture,
                    online = cand.Online,
                    tecnologies = cand.Technologies.Select(tech => tech.Name).ToList(),
                    projects = cand.Projects.Select(proj => new
                    {
                        id = proj.Id,
                        name = proj.Name,
                        description = proj.Description,
                        link = proj.Link
                    }).ToList()
                }).ToList();
                return Ok(data);
            }
        }

        [HttpGet]
        public IHttpActionResult Candidate(string id)
        {
            //using (ApplicationDbContext db = new ApplicationDbContext())
            //{
            //    var data = db.Candidates.Select(cand => new
            //    {
            //        firstName = cand.FirstName,
            //        lastName = cand.LastName,
            //        points = cand.Points,
            //        cv = cand.CV,
            //        desription = cand.Description,
            //        linkedId = cand.LinkedId,
            //        picture = cand.Picture,
            //        online = cand.Online,
            //        tecnologies = cand.Technologies.Select(tech => tech.Name).ToList(),
            //        projects = cand.Projects.Select(proj => new
            //        {
            //            name = proj.Name,
            //            description = proj.Description,
            //            link = proj.Link
            //        }).ToList()
            //    }).ToList();
            //    return Ok(data);
            //}
            Candidate cand = dbContext.Candidates.Find(id);
            var user = new
            {
                firstName = cand.FirstName,
                lastName = cand.LastName,
                points = cand.Points,
                cv = cand.CV,
                desription = cand.Description,
                linkedId = cand.LinkedId,
                picture = cand.Picture,
                online = cand.Online,
                tecnologies = cand.Technologies.Select(tech => tech.Name).ToList(),
                projects = cand.Projects.Select(proj => new
                {
                    name = proj.Name,
                    description = proj.Description,
                    link = proj.Link
                }).ToList()
            };
            return Ok(user);
        }

        [HttpPost]
        public IHttpActionResult GetUser(string mail)
        {
            ApplicationUser user3 = dbContext.Users.Where(pr => pr.Email == mail).First();
            if (user3 is Candidate)
            {
                var user1 = dbContext.Candidates.Find(user3.Id);
                var user2 = new
                {
                    id=user1.Id,
                    description = user1.Description,
                    firstName = user1.FirstName,
                    lastName = user1.LastName,
                    linkedId = user1.LinkedId,
                    points = user1.Points
                };
                return Ok(user2);
            }
            else
            {
                var user1 = dbContext.Employers.Find(user3.Id);
                var user2 = new
                {
                    id = user1.Id,
                    linkedId = user1.LinkedId,
                    linkToWebsite = user1.LinkToWebsite,
                    name= user1.Name,
                    place=user1.Place,
                    staff=user1.Staff
                };
                return Ok(user1);
            }
        }

    }
}
