import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/take';

import { AuthService } from "app/_services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) { }

    canActivate() {
        return this.authService.afAuth.authState
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            });
    }
}