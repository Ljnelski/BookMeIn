import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    if (this.authService.lacksRole(UserRole.serviceProvider)) return;

    this.apiService
      .getOrganizationTimeSlots(this.authService.user._id)
      .subscribe((timeSlots) => {
        this._timeSlots$.next(timeSlots);
      });
  }

  createTimeSlot(startDate, endDate) {
    console.error("CREATE TIMESLOT NOT IMPLEMENTED")
  }
}
