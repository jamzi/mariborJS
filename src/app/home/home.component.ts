import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/_services/auth.service";
import { DatabaseService } from "app/_services/database.service";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { MdDialogRef, MdDialog } from "@angular/material";
import { User } from "app/_models/user.model";
import { EditUserDialog } from "app/home/edit-user/edit-user-dialog.component";
import { SnackbarService } from "app/_services/snackbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: FirebaseListObservable<User[]>;
  selectedOrderBy: string = 'first_name';
  orderByValues = [
    { value: 'first_name', viewValue: 'First Name', selected: true },
    { value: 'email', viewValue: 'Email' },
    { value: 'gender', viewValue: 'Gender' }
  ];

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService,
    public dialog: MdDialog,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.users = this.databaseService.getUsers();
  }

  filterBy(selectedOrderBy: string) {
    this.databaseService.filterBy(selectedOrderBy);
  }

  editUser(user: User) {
    let dialogRef = this.dialog.open(EditUserDialog);
    dialogRef.componentInstance.user = user;
    dialogRef.afterClosed().subscribe(user => {
      this.updateUser(user);
    });
  }

  updateUser(user: User) {
    this.databaseService.updateUser(user).subscribe(
      data => {
        this.snackbarService.show('User sucessfully updated');
      },
      error => {
        this.snackbarService.show(error);
      });
  }

  onLogout() {
    this.authService.logout();
  }
}

