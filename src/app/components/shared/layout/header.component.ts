import { Component } from '@angular/core';
import { Response } from '@angular/http';

// import {  } from '../shared/data-storage.service';
import { AuthService, AlertService, DataStorageService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = '';

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private alertService: AlertService) {
}

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

  public menuItems: Array<Object> = [
    {
      icon: 'face',
      title: 'My Profile',
      link: '/profile'
    },
    {
      icon: 'chat',
      title: 'Messages',
      link: '/messages'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jameschan888/Angular4MaterialDesign'
    },
  ];
}
