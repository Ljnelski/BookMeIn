import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = "liam_auth"
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: User;

  get token() {
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private apiService: ApiService) { 
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap(response => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token)
        this.user = this.getUser(response.token);
        console.log(response.token);

      })
    )
  }

  getUser(token: string) : User {
    if(token) {
      return {
        username: "testUsername",
        password: "password21",
        roles: ['customer', 'serviceProvider', 'admin']
      }
    }
    else {
      return {
        username: null,
        password: null,
        roles: []
      }
    }
  }
}
