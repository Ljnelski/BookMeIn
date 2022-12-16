import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-create-time-slot-page',
  templateUrl: './create-time-slot-page.component.html',
  styleUrls: ['./create-time-slot-page.component.css']
})
export class CreateTimeSlotPageComponent implements OnInit {

  timeControl = new FormControl()
  times : number[]

  filteredTimes : Observable<number[]>

  constructor() {
    this.times = new Array(2400).fill(true).map((e,i) => i + 1)
  }

  ngOnInit(): void {
    this.filteredTimes = this.timeControl.valueChanges.pipe(map(value => {
      return this.filter(value)
    }))
  }

  private filter(value: string) : number[] {
    return this.times.map(time => time.toString()).filter(time => time.includes(value)).map(time => Number.parseInt(time))
  }
}
