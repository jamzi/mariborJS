import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule } from '@angular/material';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdSnackBarModule, MdMenuModule, MdSelectModule, MdDialogModule } from '@angular/material';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { RoutingModule } from "app/app-routing.module";
import { AuthGuard } from "app/_guards";
import { AuthService } from "app/_services/auth.service";
import { SnackbarService } from "app/_services/snackbar.service";
import { DatabaseService } from "app/_services/database.service";

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdSnackBarModule,
    MdMenuModule,
    MdSelectModule,
    MdDialogModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    SnackbarService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
