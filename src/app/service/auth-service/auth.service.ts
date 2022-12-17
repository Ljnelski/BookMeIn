import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Organization } from 'src/app/models/organization';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user_roles';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _organization$ = new BehaviorSubject<Organization>(null);

  private readonly USER = 'user_auth';
  private readonly ORGANIZATION = 'user_organization'

  isLoggedIn$ = this._isLoggedIn$.asObservable();
  organization$ = this._organization$.asObservable();

  user!: User;
  organization: Organization;

  get currentUser() {
    return JSON.parse(localStorage.getItem(this.USER));
  }

  get currentOrganization() {
    return JSON.parse(localStorage.getItem(this.ORGANIZATION))
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.currentUser);
    this.user = this.currentUser;
    this.organization = this.currentOrganization;
  }

  login(username: string, password: string) {
    return this.apiService.loginUser(username, password).pipe(
      tap((response) => {
        console.log('login response: ', response);
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.USER, JSON.stringify(response));
        this.user = response;

        if (this.hasRole(UserRole.serviceProvider)) this.getOrganization();
      })
    );
  }

  getOrganization() {
    this.apiService
      .getUserOrganization(this.user._id)
      .pipe(tap((response) => {

        console.log("Getting Organization Response: ", response);
        localStorage.setItem(this.ORGANIZATION, JSON.stringify(response))
        // this._organization$.next(response)
      }))
      .subscribe();
  }

  createOrganization(formData) {
    let newOrganization : Organization = {
      name: formData.Name,
      description: formData.Description,
      address: formData.Address,
      phone: formData.Phone,
      email: formData.Email,
      serviceProviderId: this.user._id,
      status: null,
    }

    this.apiService.createOrganization(newOrganization).pipe(tap(response => {
      console.log("Added Organization")
    })).subscribe();

    this.getOrganization()
  }

  updateOrganization(formData) {

  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem(this.USER);
    this.user = null;
  }

  hasRole(requiredRole: UserRole): boolean {
    if (!this.user) {
      return false;
    } else {
      return this.user.roles.includes(requiredRole);
    }
  }

  lacksRole(requiredRole: UserRole): boolean {
    return !this.hasRole(requiredRole);
  }

  hasOrganization() : boolean {
    console.log("organization exists?: ", !!this.organization._id)
    return !!this.organization._id
  }
}
