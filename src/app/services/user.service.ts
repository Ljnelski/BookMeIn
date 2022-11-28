import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import {User} from '../shared/models/User';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable :Observable<User>;

  constructor(private http: HttpClient, private  toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();//only observable is exposed to the outside world
  }

  login(userLogin:IUserLogin):Observable<User>

  {
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap(
        {
          next: (user:User)=> {
            this.setUserToLocalStorage(user);
            this.userSubject.next(user);
            this.toastrService.success("Login Successful");
          }

        }
      )
    )
  }
  private setUserToLocalStorage(user:User){
    localStorage.setItem('USER_KEY',JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem('USER_KEY');
    if (userJson){
      return JSON.parse(userJson) as User;
    }
    return new User();
  }

}

