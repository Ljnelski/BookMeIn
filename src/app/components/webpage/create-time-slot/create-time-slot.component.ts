import { Component } from '@angular/core';
import { TimeSlotService } from 'src/app/service/time-slot-service/timeslot.service';

@Component({
  selector: 'app-create-time-slot',
  templateUrl: './create-time-slot.component.html',
  styleUrls: ['./create-time-slot.component.css']
})
export class CreateTimeSlotComponent {
  constructor(private timeSlotService: TimeSlotService) { }
}
