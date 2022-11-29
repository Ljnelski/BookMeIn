import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe(response => {
        this.router.navigate(['/home']);
      });
  }
}