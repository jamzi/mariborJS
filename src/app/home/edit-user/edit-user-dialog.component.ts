import { MdDialogRef } from "@angular/material";
import { User } from "app/_models/user.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
})
export class EditUserDialog {
  constructor(public dialogRef: MdDialogRef<EditUserDialog>) { }
  user: User;
}