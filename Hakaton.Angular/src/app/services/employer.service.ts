import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { RestService } from './rest.service';
import { Employer } from '../models/employer';

@Injectable()
export class EmployerService {
    employers: Employer[];

    constructor(private rest: RestService) { }

    getEmployers() {
        this.rest.getWithHeader('/Data/GetEmployers', null)
            .subscribe((data) => { console.log(data); this.employers = data; });
        return this.employers;
    }

    getEmployer(email: any) {
        return this.employers
            .find(emp => emp.email == email);
    }
}