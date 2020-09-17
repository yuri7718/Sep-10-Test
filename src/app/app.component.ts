import { Component, HostListener, OnInit } from '@angular/core';
import { UserinfoService } from './services/userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  title = 'Nebula AI';
  isMenuOpen = true;
  contentMargin = 200;

  constructor(private userInfoService: UserinfoService) {}

  notification1: number;
  notification2: number;
  username = "Alexander";

  ngOnInit() {
    this.userInfoService.getUserInfo().subscribe(res => {
      console.log(res);
      this.username = res["username"];
      this.notification1 = res["bell-notification"];
      this.notification2 = res["flag-notification"]})
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 50;
      this.title = "NBAI";
    } else {
      this.contentMargin = 200;
      this.title = "Nebula AI";
    }
  }
  
}