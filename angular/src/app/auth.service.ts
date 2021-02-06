import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, public router: Router) { }
  currentUser = {};
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  register(user: User): Observable<any> {

    return this.httpClient.post(`api/users/register`, user).pipe(
      catchError(this.handleError)
    )
  }

  login(user: User) {
    return this.httpClient.post<any>(`api/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['users/profile/' + res.msg._id]);
        })
      })
  }

  get isLoggedIn(){
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
    }
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getUserProfile(id: any): Observable<any> {
    return this.httpClient.get(`api/users/profile/${id}`, { headers: this.headers }).pipe(
      map((res) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
