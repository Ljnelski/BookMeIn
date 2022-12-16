import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotsPageComponent } from './time-slots-page.component';

describe('TimeSlotsPageComponent', () => {
  let component: TimeSlotsPageComponent;
  let fixture: ComponentFixture<TimeSlotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSlotsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSlotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
