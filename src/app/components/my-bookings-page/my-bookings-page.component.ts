import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-my-bookings-page',
  templateUrl: './my-bookings-page.component.html',
  styleUrls: ['./my-bookings-page.component.css']
})
export class MyBookingsPageComponent {
  constructor(authService: AuthService) {}
}
