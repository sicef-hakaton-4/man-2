import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRoute, Params} from '@angular/router';
import {Location} from "@angular/common";
import { Route } from '../utilities/constants/routing.constants';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  location: Location;
  url: String;

  constructor(private router: Router, private authService: AuthenticationService ) { }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate([Route.LOGIN_ROUTE]);
    return false;
  }

}
