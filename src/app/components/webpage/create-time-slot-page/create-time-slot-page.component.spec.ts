import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeSlotPageComponent } from './create-time-slot-page.component';

describe('CreateTimeSlotPageComponent', () => {
  let component: CreateTimeSlotPageComponent;
  let fixture: ComponentFixture<CreateTimeSlotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimeSlotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimeSlotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
