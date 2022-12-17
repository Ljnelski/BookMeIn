import { Component, Input } from '@angular/core';
import { TimeSlot } from 'src/app/models/timeslot';

@Component({
  selector: 'app-time-slot-display',
  templateUrl: './time-slot-display.component.html',
  styleUrls: ['./time-slot-display.component.css']
})
export class TimeSlotDisplayComponent {
  @Input() timeSlot : TimeSlot
}
