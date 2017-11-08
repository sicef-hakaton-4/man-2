import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../../models/candidate';

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  @Input() candidate: Candidate;

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['applicants']);
  }
}
