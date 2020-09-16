import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'Nebula AI';
  isMenuOpen = true;
  contentMargin = 200;

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