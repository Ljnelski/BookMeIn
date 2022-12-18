// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/webpage/login-page/login-page.component';
import { RegisterPageComponent } from './components/webpage/register-page/register-page.component';
import { ServiceProviderRegisterPageComponent } from './components/webpage/service-provider-register-page/service-provider-register-page.component';
import { HomePageComponent } from './components/webpage/home-page/home-page.component';
import { DatatableComponent } from './components/webpage/datatable/datatable.component';
import { MyAccountPageComponent } from './components/webpage/my-account-page/my-account-page.component';
import { BookingDisplayComponent } from './components/widgets/booking-display/booking-display.component';
import { TimeSlotsPageComponent } from './components/webpage/time-slots-page/time-slots-page.component';
import { CreateBookingPageComponent } from './components/webpage/create-booking-page/create-booking-page.component';
import { TimeSlotDisplayComponent } from './components/widgets/time-slot-display/time-slot-display.component';
import { OrganizationPageComponent } from './components/webpage/organization-page/organization-page.component';
import { CreateTimeSlotPageComponent } from './components/webpage/create-time-slot-page/create-time-slot-page.component';

// Services
import { ApiService } from './service/api-service/api.service';
import { AuthService } from './service/auth-service/auth.service';

// Guards
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';
import { AuthInterceptor } from './service/auth.interceptor';
import { MyBookingsPageComponent } from './components/webpage/my-bookings-page/my-bookings-page.component';
import { BookingService } from './service/booking-service/booking.service';
import { FooterComponent } from './components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ServiceProviderRegisterPageComponent,
    HomePageComponent,
    FooterComponent,
    DatatableComponent,
    MyAccountPageComponent,
    MyBookingsPageComponent,
    BookingDisplayComponent,
    TimeSlotsPageComponent,
    CreateBookingPageComponent,
    TimeSlotDisplayComponent,
    OrganizationPageComponent,
    CreateTimeSlotPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    ApiService,
    AuthService,
    BookingService,
    IsAuthenticatedGuard,
    AuthInterceptor,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
