import { Component } from '@angular/core';
import { UserRole } from 'src/app/models/user_roles';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.css'],
})
export class MyAccountPageComponent {
  userRole = UserRole;

  constructor(public authService: AuthService) {}
}
