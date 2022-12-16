import { Component, OnInit } from '@angular/core';
import { TimeSlotService } from 'src/app/service/time-slot-service/timeslot.service';

@Component({
  selector: 'app-time-slots-page',
  templateUrl: './time-slots-page.component.html',
  styleUrls: ['./time-slots-page.component.css']
})
export class TimeSlotsPageComponent implements OnInit {
  constructor(public timeSlotService: TimeSlotService) {}

  ngOnInit(): void {
      this.timeSlotService.getTimeSlots()
  }
}
