import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, Subject, tap } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { Organization } from 'src/app/models/organization';
import { TimeSlot } from 'src/app/models/timeslot';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // To saved having to retype the address if it is changed
  api = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  loginUser(username: string, password: String): Observable<any> {
    console.log('login called');
    return this.httpClient.post(this.api + '/login', {
      username: username,
      password: password,
    });
  }

  registerUser(newUser: User) {
    return this.httpClient.post(this.api + '/users', newUser);
  }

  getUserOrganization(userId: string): Observable<Organization> {
    userId = userId.trim()
    const options = { params: new HttpParams().set('id', userId) }
    return this.httpClient.get<Organization>(this.api + "/organizations", options)
  }

  createOrganization(newOrganization: Organization) {
    return this.httpClient.post(this.api + "/organizations", newOrganization)
  }

  getOrganizationTimeSlots(organizationId: string): Observable<any> {
    console.log(organizationId)
    organizationId = organizationId.trim();
    const options = {params: new HttpParams().set('id', organizationId)}
    return this.httpClient.get(this.api + "/timeslots/organization", options)
  }

  createTimeSlot(newTimeSlot: TimeSlot) {
    return this.httpClient.post(this.api + "/timeslots", newTimeSlot);
  }

  getUserBookings(userId: string): Observable<any> {
    userId = userId.trim()
    const options = { params: new HttpParams().set('id', userId) }
    return this.httpClient.get(this.api + "/bookings", options)
  }



  deleteUser(username: string, password: string) {}

  getUsers() {
    return this.httpClient.get(this.api + '/users');
  }
}
