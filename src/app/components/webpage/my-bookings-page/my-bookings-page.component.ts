import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { BookingService } from 'src/app/service/booking-service/booking.service';

@Component({
  selector: 'app-my-bookings-page',
  templateUrl: './my-bookings-page.component.html',
  styleUrls: ['./my-bookings-page.component.css']
})
export class MyBookingsPageComponent implements OnInit {
  constructor(public bookingService : BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings()
  }


}


