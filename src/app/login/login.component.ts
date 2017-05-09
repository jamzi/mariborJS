import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "app/_services/auth.service";
import { RegisterComponent } from "app/register/register.component";
import { SnackbarService } from "app/_services/snackbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.authService.afAuth.authState
      .map(authState => !!authState)
      .subscribe((authenticated) => {
        if (authenticated) {
          this.router.navigate(['/home']);
        }
      });
  }

  onLoginEmailPassword() {
    this.authService.loginEmailPassword(this.model.email, this.model.password).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.snackbarService.show(error);
      });
  }

  onLoginFacebook() {
    this.authService.loginFacebook(this.model.email, this.model.password).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.snackbarService.show(error);
      });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
