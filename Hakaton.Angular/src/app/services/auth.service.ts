import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Headers} from '@angular/http';
import {Router} from "@angular/router";
import { Endpoint } from "../utilities/constants/endpoint.constants";
import { Route } from "../utilities/constants/routing.constants";
import { AuthenticationToken } from "../models/auth-token";

@Injectable()
export class AuthenticationService {
  authenticatedUser: AuthenticationToken = new AuthenticationToken();
  many: any[];
  constructor(private restService: RestService, private router: Router ) {
  }

  parseJsonToAuthTokens(res: string, pass: String): AuthenticationToken {
    this.authenticatedUser.access_token = JSON.parse(res).access_token;
    this.authenticatedUser.refresh_token = JSON.parse(res).refresh_token;
    this.authenticatedUser.userName = JSON.parse(res).userName;
    this.authenticatedUser.token_type = JSON.parse(res).token_type;
    this.authenticatedUser.expires_in = JSON.parse(res).expires_in;
    this.authenticatedUser.expires = JSON.parse(res)['.expires'];
    this.authenticatedUser.issued = JSON.parse(res)['.issued'];
    this.authenticatedUser.role = JSON.parse(res).role;
    this.authenticatedUser.id = JSON.parse(res).id;
    return this.authenticatedUser;
  }

  login() {
    localStorage.setItem('accessToken', this.authenticatedUser.access_token + '');
    localStorage.setItem('user', this.authenticatedUser.userName + '');
    localStorage.setItem('id', this.authenticatedUser.id + '');
    localStorage.setItem('role', this.authenticatedUser.role + '');
    localStorage.setItem('refreshToken', this.authenticatedUser.refresh_token + '');
    this.router.navigate([Route.HOME_ROUTE]);
    if (localStorage.getItem('role') !== 'Client') {
        //this.router.navigate([Route.HOME_ROUTE]);
    } else {
      //this.router.navigate([Route.CONTROL_MANAGEMENT_ROUTE]);
    }
  }

  refreshAccessToken() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let grant_type = 'refresh_token';
      let data= "grant_type="+ encodeURIComponent(grant_type.toString())+ "&refresh_token=" + encodeURIComponent(localStorage.getItem('refreshToken').toString())
        + "&clientId=DAB27C6A-BAE3-48B6-95A3-AE6C18865A36";
      this.restService.postOneWithHeader(Endpoint.GET_ACCESS_TOKEN, headers, data).subscribe(
        res => {
          localStorage.removeItem('accessToken');
          localStorage.setItem('accessToken', JSON.parse(res._body).access_token + '');
          resolve(true);
        },
        err => {
          localStorage.clear();
          this.logout();
          resolve(false);
        });
    });
  }


  logout() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body= "clientId=DAB27C6A-BAE3-48B6-95A3-AE6C18865A36";
    this.restService.postOneWithHeader(Endpoint.LOGOUT, headers, body).subscribe(
      res => {
        localStorage.clear();
      },
      err => {
        localStorage.clear();
        this.router.navigate([Route.LOGIN_ROUTE]);
      });
  }

  getAuthenticatedUserRole(): String {
    return localStorage.getItem('role');
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    } else {
      return false;
    }
  }
  getAuthenticatedUser(): AuthenticationToken {
    this.authenticatedUser.userName = localStorage.getItem('user');
    this.authenticatedUser.role = localStorage.getItem('role');
    return this.authenticatedUser;
  }
}
