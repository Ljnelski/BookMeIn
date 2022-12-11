import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyAccountPageComponent } from './components/my-account-page/my-account-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ServiceProviderRegisterPageComponent } from './components/service-provider-register-page/service-provider-register-page.component';
import { HasRoleGuard } from './guards/has-role/has-role.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [IsAuthenticatedGuard, HasRoleGuard],
    data: {
      requiredRole: "customer"
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
      requiredRole: "admin"
    }
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
    data: {
      requiredRole: "customer"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
