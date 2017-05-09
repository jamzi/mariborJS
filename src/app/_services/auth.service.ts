import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router) {
  }

  loginEmailPassword(email: string, password: string) {
    return Observable.create(observer => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
    });
  }

  loginFacebook(email: string, password: string) {
    return Observable.create(observer => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
    });
  }

  register(email: string, password: string) {
    return Observable.create(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
    });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login'])
      });
  }
}
