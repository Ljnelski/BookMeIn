// This Component is for testing the API or fake API
// Just a place to print data to verify it exists and is valid

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, take } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/service/api-service/api.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  users$: Observable<any[]>

  newUsername: FormControl = new FormControl("newUsername");
  newPassword: FormControl = new FormControl("newPassword");

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.users$ = this.apiService.getUsers().pipe(map(users => users as Array<any>));
    this.users$.subscribe(() => console.log("Updated Users"))
  }

  addUser() {
    const newUser : User = {
      username : this.newUsername.value,
      password: this.newPassword.value,
      roles: ['customer']
    }

    console.log(newUser);

    this.apiService.register(newUser).pipe(take(1)).subscribe(response => console.log(response));
    this.apiService.getUsers();
    window.location.reload();
  }
}
