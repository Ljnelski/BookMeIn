import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { TimeSlotService } from 'src/app/service/time-slot-service/timeslot.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-time-slot-page',
  templateUrl: './create-time-slot-page.component.html',
  styleUrls: ['./create-time-slot-page.component.css'],
})
export class CreateTimeSlotPageComponent implements OnInit {
  timeSlotForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
  });

  times: string[] = []
  tt = 0;
  x = 5;

  constructor(private timeSlotService: TimeSlotService) {
    for (var i = 0; this.tt < 24 * 60; i++) {
      var hh = Math.floor(this.tt / 60); // getting hours of day in 0-24 format
      var mm = this.tt % 60; // getting minutes of the hour in 0-55 format\
      let time =
        ('0' + hh).slice(-2) + // Hour
        ':' + // Divider
        ('0' + mm).slice(-2); // minute
      this.times.push(moment(time, 'HH:mm').format('h:mm A'));
      this.tt = this.tt + this.x;
    }
  }

  ngOnInit(): void {
    this.timeSlotForm.markAllAsTouched();
  }

  createTimeSlot() {
    let data = this.timeSlotForm.value;

    let startTime = moment(data.startTime, 'h:mm A');
    let startDate = moment(data.startDate)
      .set('hours', startTime.hours())
      .set('minutes', startTime.minutes())
      .toDate();

    let endTime = moment(data.endTime, 'h: mm A')
    let endDate = moment(data.endDate)
    .set('hours', endTime.hours())
    .set('minutes', endTime.minutes())
    .toDate();

    this.timeSlotService.createTimeSlot(startDate, endDate);


  }
}
