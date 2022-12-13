import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { UserRole } from 'src/app/models/user_roles';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  userRole = UserRole

  constructor(public authService: AuthService) {}

  canShowNavItem(requiredRole : UserRole, showWhenAuthorized = true) : boolean {
    return this.authService.user?.roles.includes(requiredRole) && showWhenAuthorized;
  }
}
