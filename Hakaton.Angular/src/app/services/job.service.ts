import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { RestService } from './rest.service';
import { Job } from '../models/job';

@Injectable()
export class JobService {
    jobs: Job[];

    constructor(private rest: RestService)
    { 
        this.jobs = [new Job(1,".NET developer",0,0,9,17,1,400,50),
        new Job(3,"C# developer",0,0,9,17,1,400,50),
        new Job(2,"Java developer",0,0,9,17,1,400,50),
        new Job(4,"Angular developer",0,0,9,17,1,400,50)];
    }

    getJobs() {
        //this.rest.getWithHeader('/Data/GetJobs', null)
        //    .subscribe((data) => { console.log(data); this.jobs = data; });
        return this.jobs;
    }

    getJob(id: any) {
        return this.jobs
            .find(job => job.id == id);
    }
}