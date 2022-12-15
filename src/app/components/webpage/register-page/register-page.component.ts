import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user_roles';
import { ApiService } from '../../../service/api-service/api.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  form = new FormGroup({

    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    passwordConfirm: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email])

  })

  constructor(private apiService: ApiService, private router: Router) {

   }
    ngOnInit() {
    }
    Register() {
        if (this.form.invalid) {
            return;
        }
        if (this.form.value.password !== this.form.value.passwordConfirm) {
            return;
        }
        let user=new User();
        user.username = this.form.value.username;
        user.password = this.form.value.password;
        user.email = this.form.value.email;
        user.roles = [UserRole.customer];
        this.apiService.registerUser(user).subscribe(response => {
            this.router.navigate(['/login']);
        });
    }

    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }
    get passwordConfirm() {
        return this.form.get('passwordConfirm');
    }
    get email() {
        return this.form.get('email');
    }

}
