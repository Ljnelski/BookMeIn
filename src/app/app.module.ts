// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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

// Services
import { ApiService } from './service/api-service/api.service';
import { AuthService } from './service/auth-service/auth.service';

// Guards
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';
import { AuthInterceptor } from './service/auth.interceptor';
import { MyBookingsPageComponent } from './components/webpage/my-bookings-page/my-bookings-page.component';
import { BookingService } from './service/booking-service/booking.service';
import { CreateTimeSlotComponent } from './components/webpage/create-time-slot/create-time-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ServiceProviderRegisterPageComponent,
    HomePageComponent,
    DatatableComponent,
    MyAccountPageComponent,
    MyBookingsPageComponent,
    BookingDisplayComponent,
    CreateTimeSlotComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
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
