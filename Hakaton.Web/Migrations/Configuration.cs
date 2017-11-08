namespace Hakaton.Web.Migrations
{
    using Microsoft.AspNet.Identity;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Hakaton.Web.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Hakaton.Web.Models.ApplicationDbContext context)
        {
            var passwordHash = new PasswordHasher();
            string password = passwordHash.HashPassword("Pass123!");

            var korisnici = new List<Candidate>()
            {
                new Candidate { UserName = "arsa@gmail.com", Email = "arsa@gmail.com", EmailConfirmed = true, FirstName = "Arsa", LastName = "Arsic", Description="nesto", Points = 0, LinkedId="https://www.google.rs/", PasswordHash = password, Online = false, Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0, },
                new Candidate { UserName = "nena@gmail.com", Email = "nena@gmail.com", EmailConfirmed = true, FirstName = "Nena", LastName = "Nenic", Description="nesto", Points = 0, LinkedId="https://www.google.rs/", PasswordHash = password, Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0  },
                new Candidate { UserName = "lane@gmail.com", Email = "lane@gmail.com", EmailConfirmed = true, FirstName = "Lane", LastName = "Lanic",Description="nesto",  Points = 0, LinkedId="https://www.google.rs/", PasswordHash = password, Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false , AccessFailedCount=0 },
                new Candidate { UserName = "nidza@gmail.com", Email = "nidza@gmail.com", EmailConfirmed = true, FirstName = "Nidza", LastName = "Nidzic", Description="nesto", Points = 0, LinkedId="https://www.google.rs/", PasswordHash = password, Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0  }
            };

            korisnici.ForEach(k => context.Candidates.AddOrUpdate(k));
            context.SaveChanges();

            string password2 = passwordHash.HashPassword("Pass123!");

            var firme = new List<Employer>
            {
                new Employer { UserName = "quantox@gmail.com", Email = "quantox@gmail.com", EmailConfirmed = true, LinkedId = "https://www.google.rs/", PasswordHash = password2, LinkToWebsite = "https://quantox.com/", Name = "Quantox", Staff = 100, Place="Nis", Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0  },
                new Employer { UserName = "nordeus@gmail.com", Email = "nordeus@gmail.com", EmailConfirmed = true, LinkedId = "https://www.google.rs/", PasswordHash = password2, LinkToWebsite = "https://www.nordeus.com/", Name = "Nordeus", Staff = 160, Place="Nis", Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false , AccessFailedCount=0 },
                new Employer { UserName = "producthive@gmail.com", Email = "producthive@gmail.com", EmailConfirmed = true, LinkedId = "https://www.google.rs/", PasswordHash = password2, LinkToWebsite = "http://producthive.io/", Name = "ProductHive", Staff = 10, Place="Belgrade", Online = false,Picture="slika", PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0  },
                new Employer { UserName = "elfak@gmail.com", Email = "elfak@gmail.com", EmailConfirmed = true, LinkedId = "https://www.google.rs/", PasswordHash = password2, LinkToWebsite = "http://www.elfak.ni.ac.rs/", Name = "Elektronski fakultet", Staff = 200, Place="Nis", Online = false, Picture="slika",PhoneNumberConfirmed = false, TwoFactorEnabled = false, LockoutEnabled = false, AccessFailedCount=0  }
            };

            firme.ForEach(f => context.Employers.AddOrUpdate(f));
            context.SaveChanges();

            var messages = new List<Message>
            {
                new Message {   Content="poruka1", Opened=true, SenderId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                ReceiverId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka2", Opened=true, ReceiverId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                SenderId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka3", Opened=true, SenderId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                ReceiverId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka4", Opened=true, ReceiverId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                SenderId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka5", Opened=true, SenderId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                ReceiverId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka6", Opened=true, ReceiverId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                SenderId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka7", Opened=true, SenderId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                ReceiverId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now },
                new Message {   Content="poruka8", Opened=true, ReceiverId=korisnici.Single(k=>k.Email=="arsa@gmail.com").Id,
                                SenderId=firme.Single(f=>f.Email=="quantox@gmail.com").Id, Time = DateTime.Now }
            };

            messages.ForEach(f => context.Messages.AddOrUpdate(f));
            context.SaveChanges();

            Employer quantox = firme.Single(f => f.Email == "quantox@gmail.com");

            var jobs = new List<Job>
            {
                new Job { EmployerId=quantox.Id, Name="Junior Developer", Type=TimeType.FullTime, MinPoints=100, StartAt=7, FinishAt=15, WorkFromHome=8, Salary=1300, TeamSize=5 },
                new Job { EmployerId=quantox.Id, Name="Senior Developer", Type=TimeType.FullTime, MinPoints=300, StartAt=7, FinishAt=15, WorkFromHome=8, Salary=2300, TeamSize=5 },
                new Job { EmployerId=quantox.Id, Name="Junior Developer", Type=TimeType.PartTime, MinPoints=100, StartAt=7, FinishAt=15, WorkFromHome=0, Salary=700, TeamSize=2 },
                new Job { EmployerId=quantox.Id, Name="Senior Developer", Type=TimeType.PartTime, MinPoints=300, StartAt=7, FinishAt=15, WorkFromHome=8, Salary=1000, TeamSize=3 }
            };

            jobs.ForEach(j => context.Jobs.AddOrUpdate(j));
            context.SaveChanges();
        }
    }
}
