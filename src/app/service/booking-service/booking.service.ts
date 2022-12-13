import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from, Observable, tap } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { ApiService } from '../api-service/api.service';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings$ = new BehaviorSubject<Booking[]>([]);
  bookings$ = this._bookings$.asObservable();

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  getBookings() {
    console.log('getting user');
    if (this.authService.user) {
      console.log('there is a user');
      this.apiService
        .getUserBookings(this.authService.user._id)
        .pipe(
          tap((bookings) => {
            console.log('bookings from API Service: ', bookings);
          })
        )
        .subscribe((bookings) => {
          this._bookings$.next(bookings);
        });
    }
  }
}
