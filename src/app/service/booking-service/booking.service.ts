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
    // Guard Clauses
    if (!this.authService.user) return;

    this.apiService
      .getUserBookings(this.authService.user._id)
      .subscribe((bookings) => {
        this._bookings$.next(bookings);
      });
  }

  createBooking() {
    console.error("CREATE BOOKING NOT IMPLEMENTED")
  }
}
