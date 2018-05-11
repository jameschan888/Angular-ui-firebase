import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService, AlertService, UserService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = '';
  isAuthenticated = false;
  angularImage: string;

  menuItems: Array<Object> = [
    {
      icon: 'description',
      title: 'Medium @jameschan888',
      link: 'https://medium.com/@jameschan888'
    },
    {
      icon: 'archive',
      title: 'Published packages',
      link: 'https://www.npmjs.com/~jameschan888'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jameschan888/Angular-ui-firebase'
    },
  ];

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private userService: UserService
    ) {
      this.isAuthenticated = this.authService.isAuthenticated(),
      this.angularImage = '/assets/img/angular2.png';
  }

  userUid() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.uid;
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  userName() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.displayName;
  }

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }
}
