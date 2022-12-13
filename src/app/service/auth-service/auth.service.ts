import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = "user_auth"
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: User;

  get currentUser() {
    return JSON.parse(localStorage.getItem(this.TOKEN_NAME))
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.currentUser);
    this.user = this.currentUser;
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap(response => {
        console.log("login response: ", response)
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, JSON.stringify(response));
        this.user = response

        // When testing Comment this out, all console will be wiped from console when page router changes
        // window.location.href = "/home"


      })
    )
  }
}
