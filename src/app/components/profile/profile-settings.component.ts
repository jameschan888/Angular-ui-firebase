import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import * as firebase from 'firebase';

import { Profile, AuthService, AlertService, UserService } from '../shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  uid: any;

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private userService: UserService) {
  }

  ngOnInit() {
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

  onUpdateUserInfo(form: NgForm) {
    const displayName = form.value.displayName;
    const bio = form.value.bio;
    this.userService.updateUserInfo(firebase.auth().currentUser.uid, displayName, bio);
    this.alertService.showToaster('Your settings are saved');
  }

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

}
