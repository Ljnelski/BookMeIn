import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }
  
  login(username: string, password: String) : Observable<any> {
    const response: Observable<any> = of({ username: username, password: password, token: "adskjaekj38f0akd3"})
    return response;
  }

  register(newUser: User) {
    return this.httpClient.post("http://localhost:3000/users", newUser)
  }

  delete(username: string, password: string) {
  } 

  getUsers() {
    return this.httpClient.get("http://localhost:3000/users");
  }
}
