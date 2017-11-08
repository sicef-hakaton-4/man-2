import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../../models/candidate';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'applicants',
  templateUrl: './applicants.html',
})
export class ApplicantsComponent implements OnInit{
  ngOnInit(): void {
    this.candidates = this.cndService.getCandidates();
  }
  candidates: Candidate[];

  constructor(private cndService: CandidateService) { }

}
