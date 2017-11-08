import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import { Route } from "../utilities/constants/routing.constants";
import { AuthenticationService } from "./auth.service";
@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles: String[] = route.data.expectedRoles;
    const role = localStorage.getItem('role');
    if (!this.auth.isAuthenticated()) {
      this.router.navigate([Route.LOGIN_ROUTE]);
      return false;
    } else if (!expectedRoles.includes(role)) {
      if (role !== 'Client') {
      //this.router.navigate([Route.HOME_ROUTE]);
      } else {
        //this.router.navigate([Route.CONTROL_MANAGEMENT_ROUTE]);
      }
    }
    return true;
  }
}
