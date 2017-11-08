/**
 * Created by ING on 01-Sep-17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../utilities/constants/routing.constants';
import { LoginComponent } from '../components/login-component/login-component';
import { HomeComponent } from '../components/home/home.component';
import { ChatComponent } from '../components/chat/chat.component';
import { CandidateDetailComponent } from '../components/candidate-detail/candidate-detail.component';
import { CandidatesViewComponent } from '../components/candidates-view/candidates-view.component';
import { JobApplicationDetailsComponent } from '../components/job-application-details/job-application-details.component';
import { ApplicantsComponent } from '../components/applicants/applicants';

const routes: Routes = [
//   { path: RoutingConstants.SUPPLIER_MANAGEMENT_ROUTE, component: SupplierComponent, canActivate: [AuthGuard, RoleGuardService], data: {
//     expectedRoles: ['Admin','Supervisor']
//   }},
     { path: Route.LOGIN_ROUTE,  component: LoginComponent},
     { path: Route.CHAT_ROUTE,  component: ChatComponent},
//   { path: RoutingConstants.USER_MANAGEMENT_ROUTE , component: UserComponent, canActivate: [AuthGuard, RoleGuardService], data: {
//     expectedRoles: ['Admin', 'Supervisor']
//   }},
//   { path: RoutingConstants.CLIENT_MANAGEMENT_ROUTE, component: ClientComponent, canActivate: [AuthGuard, RoleGuardService], data: {
//     expectedRoles: ['Admin','Supervisor']
//   } },
//   { path: RoutingConstants.CONTROL_MANAGEMENT_ROUTE, component: ControlComponent, canActivate: [AuthGuard, RoleGuardService], data: {
//     expectedRoles: ['Client', 'Supervisor']
//   } },
//   { path: RoutingConstants.CONTROL_DETAILS_ROUTE, component: ControlDeatilComponent, canActivate: [AuthGuard, RoleGuardService], data: {
//     expectedRoles: ['Client', 'Supervisor']
//   } },
  { path: 'candidates', component: CandidatesViewComponent },
  { path: 'candidate/:email', component: CandidateDetailComponent },
  { path: 'job/:id', component: JobApplicationDetailsComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: Route.HOME_ROUTE, component: HomeComponent, /*canActivate: [AuthGuard]*/},
  { path: '', redirectTo: '/' + Route.LOGIN_ROUTE, pathMatch: 'full' },
  { path: '**', redirectTo: '/' + Route.LOGIN_ROUTE, pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
