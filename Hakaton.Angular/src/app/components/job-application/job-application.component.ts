import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  @Input() job: Job;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  applicationDetails() {
    this.router.navigate(['/job', this.job.id]);
  }
}
