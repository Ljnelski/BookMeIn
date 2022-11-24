import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderRegisterPageComponent } from './service-provider-register-page.component';

describe('ServiceProviderRegisterPageComponent', () => {
  let component: ServiceProviderRegisterPageComponent;
  let fixture: ComponentFixture<ServiceProviderRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProviderRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
