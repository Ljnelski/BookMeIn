import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { TimeSlot } from 'src/app/models/timeslot';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user_roles';
import { ApiService } from '../api-service/api.service';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TimeSlotService {
  private _timeSlots$ = new BehaviorSubject<any[]>([]);
  timeSlots$ = this._timeSlots$.asObservable();

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  getTimeSlots() {
    // Guard Clauses
    if (!this.authService.user) return;
    if (!this.authService.organization) return;
    if (this.authService.lacksRole(UserRole.serviceProvider)) return;

    console.log(this.authService.organization);
    console.log(this.authService.organization['_id']);

    this.apiService
      .getOrganizationTimeSlots(this.authService.organization['_id'])
      .pipe(
        tap((timeSlots) => {
          console.log("TimeSlot's Recived: ", timeSlots);
          this._timeSlots$.next(timeSlots);
        })
      )
      .subscribe();
  }

  createTimeSlot(startDate: Date, endDate: Date) {
    if (!this.authService.user?._id) return;
    if (!this.authService.organization) return;
    if (this.authService.lacksRole(UserRole.serviceProvider)) return;

    let newTimeSlot: TimeSlot = {
      startDate: startDate,
      endDate: endDate,
      organizationId: this.authService.organization._id,
      timeSlotStatus: 'Active',
    };

    this.apiService.createTimeSlot(newTimeSlot).subscribe();
  }
}
