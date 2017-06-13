import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  loginErrorMessage = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(email: string, password: string) {
    this.isLoginFailed = false;
    this.isLoggedIn = false;

    this.loginService
      .login(email, password)
      .subscribe(loginResponse => {
            if (loginResponse.success) {
              this.isLoggedIn = true;
            }
        },
       loginResponseError => {
        console.warn(loginResponseError);
        this.loginErrorMessage = loginResponseError.msg;
        this.isLoginFailed = true;
      });
  }
}
