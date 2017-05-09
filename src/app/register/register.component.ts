import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "app/_services/auth.service";
import { SnackbarService } from "app/_services/snackbar.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  }

  onRegister() {
    this.authService.register(this.model.email, this.model.password).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.snackbarService.show(error);
      });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
