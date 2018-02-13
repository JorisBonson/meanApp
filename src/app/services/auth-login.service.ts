import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../models/user';

@Injectable()
export class AuthLoginService {
  public token: string;
  private LoggedIn = new BehaviorSubject<boolean> ( false);
  currentLoggedIn = this.LoggedIn.asObservable();
  private currentUser = new BehaviorSubject<User> (null);
  CurrentUserObserver = this.currentUser.asObservable();

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + '/api/signin', { email: email, password: password })
      .map(user => {
        console.log('login has fired');

        console.log(user);
        let token = user.json() &&  user.json().token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        console.log('usertoken is');
        console.log(user.token);
        console.log ('user is');
        console.log(user.email);

        return user;
      });
  }




  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


}
