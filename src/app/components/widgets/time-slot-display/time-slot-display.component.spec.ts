import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotDisplayComponent } from './time-slot-display.component';

describe('TimeSlotDisplayComponent', () => {
  let component: TimeSlotDisplayComponent;
  let fixture: ComponentFixture<TimeSlotDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSlotDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSlotDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
