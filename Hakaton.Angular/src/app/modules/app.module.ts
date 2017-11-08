import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../components/app-component/app.component';
import { RestService } from '../services/rest.service';
import { NavbarComponent } from '../components/navbar-component/navbar-component';
import { LoginComponent } from '../components/login-component/login-component';
import { AuthenticationService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { RoleGuardService } from '../services/role-guard.service';
import { AppRoutingModule } from '../modules/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { HomeComponent } from '../components/home/home.component';

import { CandidateComponent } from '../components/candidate/candidate.component';
import { CandidateDetailComponent } from '../components/candidate-detail/candidate-detail.component';
import { JobApplicationsViewComponent } from '../components/job-applications-view/job-applications-view.component';
import { MessageComponent } from '../components/message/message.component';
import { JobApplicationComponent } from '../components/job-application/job-application.component';
import { JobApplicationDetailsComponent } from '../components/job-application-details/job-application-details.component';
import { ChatComponent } from '../components/chat/chat.component';
import { CandidateService } from '../services/candidate.service';
import { CandidatesViewComponent } from '../components/candidates-view/candidates-view.component';
import { JobService } from '../services/job.service';
import { ApplicantsComponent } from '../components/applicants/applicants';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateDetailComponent,
    JobApplicationsViewComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    MessageComponent,
    CandidatesViewComponent,
    JobApplicationComponent,
    JobApplicationDetailsComponent,
    ChatComponent,
    ApplicantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpModule, 
    DataTableModule, 
    SharedModule
  ],
  providers: [RestService, AuthenticationService, AuthGuardService, RoleGuardService, Title,
              CandidateService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
