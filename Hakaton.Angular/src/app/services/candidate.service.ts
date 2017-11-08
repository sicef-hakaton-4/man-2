import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { RestService } from './rest.service';

@Injectable()
export class CandidateService {
    candidates: Candidate[];

    constructor(private rest: RestService) {this.candidates = [
        {firstName: 'Nikola',
          lastName: "Lugic",
          email: "nlugic@gmail.com",
          linkedIn: "www.linkedin.com",
          description: "opis kandidata",
          points: 500,
      
          online: true,
          picture: "slika.jpg",
      
          technologies: ["C#", "C++", "Java"],
          projects: [
            {name: "SwiftService",
              description: "najjaci projekat",
              link: "https://bitbucket.com/luga"},
            {name: "CityRally",
            description: "najjaci projekat 2",
            link: "https://bitbucket.com/luga"}
          ]
        },
        {firstName: 'Pera',
        lastName: "Peric",
        email: "pera@gmail.com",
        linkedIn: "www.linkedin.com",
        description: "opis kandidata",
        points: 300,
    
        online: true,
        picture: "slika.jpg",
    
        technologies: ["C#", "C++", "Java"],
        projects: [
          {name: "City quest",
            description: "najjaci projekat",
            link: "https://github.com/pera"},
          {name: "Hiring funnel",
          description: "najjaci projekat 2",
          link: "https://gitlab.com/pera"}
        ]}
      ]; }

    getCandidates() : any[] {
        // this.rest.getWithHeader('/Data/GetCandidates', null)
        //     .subscribe((data) => { console.log(data); this.candidates = data; });
        return this.candidates;
    }

    getCandidate(email: any) {
        return this.candidates
            .find(cand => cand.email == email);
    }
}