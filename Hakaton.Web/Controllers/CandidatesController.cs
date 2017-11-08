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

namespace Hakaton.Web.Controllers
{
    public class CandidatesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Candidates
        public IHttpActionResult GetUsers()
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

        // GET: api/Candidates/5
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult GetCandidate(string id)
        {
            Candidate candidate = db.Candidates.Find(id);
            if (candidate == null)
            {
                return NotFound();
            }

            return Ok(candidate);
        }

        // PUT: api/Candidates/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCandidate(string id, Candidate candidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != candidate.Id)
            {
                return BadRequest();
            }

            db.Entry(candidate).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidateExists(id))
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

        // POST: api/Candidates
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult PostCandidate(Candidate candidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Candidates.Add(candidate);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CandidateExists(candidate.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = candidate.Id }, candidate);
        }

        // DELETE: api/Candidates/5
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult DeleteCandidate(string id)
        {
            Candidate candidate = db.Candidates.Find(id);
            if (candidate == null)
            {
                return NotFound();
            }

            db.Users.Remove(candidate);
            db.SaveChanges();

            return Ok(candidate);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CandidateExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}