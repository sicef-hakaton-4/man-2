import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Candidate } from '../../models/candidate';
import 'rxjs/add/operator/switchMap';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: Candidate;

  constructor(private candidates: CandidateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  //   this.route.params
  //     .subscribe((params: Params) => this.candidate = this.candidates.getCandidate(params['email']));
  }
}
