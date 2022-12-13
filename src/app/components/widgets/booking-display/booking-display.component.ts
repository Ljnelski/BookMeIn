import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-booking-display',
  templateUrl: './booking-display.component.html',
  styleUrls: ['./booking-display.component.css']
})
export class BookingDisplayComponent implements OnInit {

  @Input() booking: Booking

  constructor() { }

  ngOnInit() {
  }

}
