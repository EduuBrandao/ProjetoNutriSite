import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService
  ) {}

  onSubmit(): void {
    this.loginService.fazerLogin(this.email, this.password);
  }

}
