import { TestBed } from '@angular/core/testing';

import { TimeSlotService } from './timeslot.service';

describe('TimeslotService', () => {
  let service: TimeSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
