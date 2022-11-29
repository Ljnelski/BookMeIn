// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ServiceProviderRegisterPageComponent } from './components/service-provider-register-page/service-provider-register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DatatableComponent } from './components/datatable/datatable.component';

// Services
import { ApiService } from './service/api-service/api.service';
import { AuthService } from './service/auth-service/auth.service';

// Guards
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';

import { AuthInterceptor } from './service/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ServiceProviderRegisterPageComponent,
    HomePageComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, IsAuthenticatedGuard, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
