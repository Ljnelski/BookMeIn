import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public authService: AuthService) {}

  canShowNavItem(requiredRole, showWhenAuthorized = true) : boolean {
    console.log(this.authService.user);
    return this.authService.user.roles.includes(requiredRole) && showWhenAuthorized;
  }
}
