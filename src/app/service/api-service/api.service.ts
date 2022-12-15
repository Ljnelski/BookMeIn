import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, Subject, tap } from 'rxjs';
import { Booking } from 'src/app/models/booking';
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

  getUserBookings(userId: string): Observable<Booking[]> {

    let exampleBooking1: Booking = {
      BookingId: '1xarf32wde4gs441d',
      BookingDate: Date.now().toString(),
      BookingTime: Date.now().toString(),
      BookingStatus: 'Confirmed',
      BookingConfirmationCode: 'conformationCode',
      BookingNotes:
        'This is a example booking. Optional Details about the booking can be put here by the customer',
      BookingCreated: new Date(Date.now()),
      BookingUpdated: new Date(Date.now()),
      BookingCancelled: false,
      BookingUserId: '63908e4b0c1baf1b56516b2d',
      BookingServiceProviderId: 'Pound Town Meathouse Bar and Grill',
    };

    let exampleBooking2: Booking = {
      BookingId: '1xarf32wde4gs441d',
      BookingDate: Date.now().toString(),
      BookingTime: Date.now().toString(),
      BookingStatus: 'Confirmed',
      BookingConfirmationCode: 'conformationCode',
      BookingNotes:
        'This is a example booking. Optional Details about the booking can be put here by the customer',
      BookingCreated: new Date(Date.now()),
      BookingUpdated: new Date(Date.now()),
      BookingCancelled: false,
      BookingUserId: '63908e4b0c1baf1b56516b2d',
      BookingServiceProviderId: 'Hospital 24',
    };

    return from([[exampleBooking1, exampleBooking2]]);
    // return this.httpClient.get(api + "/bookings" + userId)
  }

  getUserTimeSlots(userId: string): Observable<any[]> {
    return from([
      [
        {
          _id: 1,
        },
        {
          _id: 2,
        },
      ],
    ]);
  }

  deleteUser(username: string, password: string) {}

  getUsers() {
    return this.httpClient.get(this.api + '/users');
  }
}
