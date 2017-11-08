import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { ResponseContentType } from '@angular/http';

@Injectable()
export class RestService {
  public baseUrl = '';

  constructor(private http: Http) {
    this.setBaseUrl();
  }

  private setBaseUrl() {
    this.baseUrl = environment.apiUrl;
  }

  postWithHeader(endpoint: String, headers: Headers, requestBody: any[]): Observable<any> {
    if (headers === null) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.baseUrl + endpoint, JSON.stringify(requestBody), options);
  }

  postExcel(endpoint: String, headers: Headers, requestBody: any): Observable<any> {
    if (headers === null) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));
    let options = new RequestOptions({headers: headers, responseType: ResponseContentType.Blob});
    return this.http
      .post(this.baseUrl + endpoint, requestBody, options);
  }

  postOneWithHeader(endpoint: String, headers: Headers, requestBody: any): Observable<any> {
    if (headers === null) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');

    }
    headers.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.baseUrl + endpoint, requestBody, options);
  }

  postWithoutAuth(endpoint: String, headers: Headers, requestBody: any): Observable<any> {
    if (headers === null) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');

    }
    headers.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.baseUrl + endpoint, requestBody, options);
  }

  getWithHeader(endpoint: String, headers: Headers): Observable<any> {
    if (headers === null) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));
    let options = new RequestOptions({headers: headers});
    return this.http
      .get(this.baseUrl + endpoint, options);
  }
}

