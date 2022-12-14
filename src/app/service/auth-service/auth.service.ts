import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user_roles';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'user_auth';

  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: User;

  get currentUser() {
    return JSON.parse(localStorage.getItem(this.TOKEN_NAME));
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.currentUser);
    this.user = this.currentUser;
  }

  login(username: string, password: string) {
    return this.apiService.loginUser(username, password).pipe(
      tap((response) => {
        console.log('login response: ', response);
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, JSON.stringify(response));
        this.user = response;
      })
    );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem(this.TOKEN_NAME);
    this.user = null;
  }

  hasRole(requiredRole: UserRole): boolean {
    if (!this.user) {
      return false;
    } else {
      return this.user.roles.includes(requiredRole);
    }
  }

  lacksRole(requiredRole: UserRole) : boolean {
    return !this.hasRole(requiredRole)
  }
}
