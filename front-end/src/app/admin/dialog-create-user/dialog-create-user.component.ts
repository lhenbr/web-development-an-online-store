import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/manageAdmin/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateUserComponent>,
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      _id: ['0', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: ['user', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.adminService.criarUser(this.userForm.value as User)
      .subscribe(res => this.dialogRef.close())    
  }

}
