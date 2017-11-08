import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'candidates-view',
  templateUrl: './candidates-view.component.html',
  styleUrls: ['./candidates-view.component.css']
})
export class CandidatesViewComponent implements OnInit {
  candidates: any[];

  constructor(private service: CandidateService, private router: Router) { }

  ngOnInit() {
    this.candidates = ['1'];
    //this.candidates = this.service.getCandidates();
   
  }

  redirect() {
    this.router.navigate(['applicants']);
  }
}
