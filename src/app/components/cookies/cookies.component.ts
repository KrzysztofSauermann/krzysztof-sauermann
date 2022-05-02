import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  cookieAccepted = 'krzysztofsauermann_cookies_accepted';
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
    const accepted = localStorage.getItem(this.cookieAccepted);
    if (accepted) {
      this.show = false;
    }
  }
  accept() {
    this.show = false;
    localStorage.setItem(this.cookieAccepted, 'true');
  }
}
