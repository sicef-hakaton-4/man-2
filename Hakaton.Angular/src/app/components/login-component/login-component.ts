
import { Component, OnInit, Input, HostListener} from '@angular/core';
import {Headers} from '@angular/http';

import {HttpErrorResponse} from "@angular/common/http";
import { AuthRequest } from '../../models/auth.request';
import { AuthenticationToken } from '../../models/auth-token';
import { RestService } from '../../services/rest.service';
import { AuthenticationService } from '../../services/auth.service';
import { Endpoint } from '../../utilities/constants/endpoint.constants';

@Component({
  selector: 'login',
  templateUrl: 'login-component.html',
  styleUrls: ['login-component.css']
})


export class LoginComponent implements OnInit {
  @Input() authBody: AuthRequest= new AuthRequest();
  many: any[];
  isRegistered: boolean = true;
  authenticatedUser: AuthenticationToken= new AuthenticationToken();

  ngOnInit() {
    if (localStorage.length !== 0 || typeof  localStorage.getItem('accessToken') === 'undefined') {
      this.authService.logout();
    }
  }

  constructor(private restService: RestService, private authService: AuthenticationService) { }

  tryLogin(event: any) : void {
    if (event.keyCode == 13){
      this.login();
    }
  }

  toggleRegister() {
    this.isRegistered = !this.isRegistered;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
      this.tryLogin(event);
  }

  login() : void {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.authBody.grant_type = 'password';
      let data= "userName=" + encodeURIComponent(this.authBody.username.toString()) +
        "&password=" + encodeURIComponent(this.authBody.password.toString()) +
      "&grant_type="+ encodeURIComponent(this.authBody.grant_type.toString());
      this.restService.postOneWithHeader(Endpoint.GET_ACCESS_TOKEN, headers, data).subscribe(
        res => {
          this.many = res;
          var parsing= res._body;
          this.authenticatedUser = this.authService.parseJsonToAuthTokens(parsing, this.authBody.password);
          this.authService.login();
        },
        err => {
        }
      );
    } 

    register() : void {
      let headers = new Headers();
      let data = {
        Email : this.authBody.username,
        Password : this.authBody.password,
        Role: this.authBody.role == "1" ? "Candidate" : "Employer"
      };
      this.restService.postOneWithHeader(Endpoint.REGISTER_ACCOUNT, null, data).subscribe(
        res => {
          this.many = res;
          var parsing= res._body;
          this.authenticatedUser = this.authService.parseJsonToAuthTokens(parsing, this.authBody.password);
          this.authService.login();
        },
        err => {
        }
      );
    }
}
