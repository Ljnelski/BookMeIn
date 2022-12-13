import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/webpage/datatable/datatable.component';
import { HomePageComponent } from './components/webpage/home-page/home-page.component';
import { LoginPageComponent } from './components/webpage/login-page/login-page.component';
import { MyAccountPageComponent } from './components/webpage/my-account-page/my-account-page.component';
import { MyBookingsPageComponent } from './components/webpage/my-bookings-page/my-bookings-page.component';
import { RegisterPageComponent } from './components/webpage/register-page/register-page.component';
import { ServiceProviderRegisterPageComponent } from './components/webpage/service-provider-register-page/service-provider-register-page.component';
import { HasRoleGuard } from './guards/has-role/has-role.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';
import { UserRole } from './models/user_roles';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [IsAuthenticatedGuard, HasRoleGuard],
    data: {
      requiredRole: UserRole.customer
    }
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'service-provider-register',
    component: ServiceProviderRegisterPageComponent,
    canActivate: [IsAuthenticatedGuard],
    data: {
      requiredRole: UserRole.serviceProvider
    }
  },
  {
    path: 'my-bookings',
    component: MyBookingsPageComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'data-table',
    component: DatatableComponent,
    // canActivate: [IsAuthenticatedGuard],
    // data: {
    //   requiredRole: UserRole.customer
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
