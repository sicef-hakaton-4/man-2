using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Hakaton.Web.Models;
using System.Web.Http.Results;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace Hakaton.Web.Controllers
{
    public class EmployersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Employers
        public IHttpActionResult GetUsers()
        {
            var data = db.Employers.Select(cand => new
            {
                id = cand.Id,
                name = cand.Name,
                linkToWebSite = cand.LinkToWebsite,
                staff = cand.Staff,
                place = cand.Place,
                linkedId = cand.LinkedId,
                picture = cand.Picture,
                online = cand.Online
            }).ToList();

            return Ok(data);
        }

        // GET: api/Employers/5
        [ResponseType(typeof(Employer))]
        public IHttpActionResult GetEmployer(string id)
        {
            Employer employer = db.Employers.Find(id);
            if (employer == null)
            {
                return NotFound();
            }

            return Ok(employer);
        }

        // PUT: api/Employers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployer(string id, Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employer.Id)
            {
                return BadRequest();
            }

            db.Entry(employer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employers
        [ResponseType(typeof(Employer))]
        public IHttpActionResult PostEmployer([FromBody]Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(employer);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EmployerExists(employer.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = employer.Id }, employer);
        }

        // DELETE: api/Employers/5
        [ResponseType(typeof(Employer))]
        public IHttpActionResult DeleteEmployer(string id)
        {
            Employer employer = db.Employers.Find(id);
            if (employer == null)
            {
                return NotFound();
            }

            db.Users.Remove(employer);
            db.SaveChanges();

            return Ok(employer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployerExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}