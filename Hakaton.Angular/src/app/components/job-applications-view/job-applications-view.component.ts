import { Component, Input, OnInit } from '@angular/core';
import { Employer } from '../../models/employer';
import { Router } from '@angular/router';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'job-applications-view',
  templateUrl: './job-applications-view.component.html',
  styleUrls: ['./job-applications-view.component.css']
})
export class JobApplicationsViewComponent implements OnInit {
  jobApplications: Job[];

  constructor(private jobs: JobService) { }

  ngOnInit() {
    this.jobApplications = this.jobs.getJobs();
  }
}
