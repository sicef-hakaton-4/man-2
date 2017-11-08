import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'job-application-details',
  templateUrl: './job-application-details.component.html',
  styleUrls: ['./job-application-details.component.css']
})
export class JobApplicationDetailsComponent implements OnInit {
  job: Job;
  
  constructor(private jobs: JobService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.job = this.jobs.getJob(params['id']));
  }

  redirect() {
    this.router.navigate(["chat"]);
  }

}
