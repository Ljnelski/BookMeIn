import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { BookingService } from 'src/app/service/booking-service/booking.service';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Liam', date: 'Jan 5, 2023', symbol: '8am'},
  {position: 2, name: 'Manav', date: 'Jan 10, 2023', symbol:'10am'},
  {position: 3, name: 'Jose', date: 'Jan 13, 2023', symbol: '12pm'},
  {position: 4, name: 'Shay', date: 'Jan 16, 2023', symbol: '2pm'},
  {position: 5, name: 'Abhishake', date: 'Jan 20, 2023', symbol: '6pm'},

];



@Component({
  selector: 'app-my-bookings-page',
  templateUrl: './my-bookings-page.component.html',
  styleUrls: ['./my-bookings-page.component.css']
})
export class MyBookingsPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }


  constructor(public bookingService : BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings()
  }


}
