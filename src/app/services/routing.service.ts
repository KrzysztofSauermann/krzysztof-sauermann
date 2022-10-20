import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { LayoutComponent } from '../components/layout/layout/layout.component';
import { RouterComponent } from '../components/router/router.component';
import { ScrollService } from './scroll.service';
import { Section } from '../models/section';
import { environment } from 'src/environments/environment';
import { faHome, faMailBulk, faHandshake, faLaptop, faPaintBrush } from '@fortawesome/free-solid-svg-icons';9
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  public static routes = [
    { path: "home", component: LayoutComponent, section: new Section("home", "about"), types: [environment.HEADER, environment.HOME], faIcon: faHome },
    { path: "about", component: LayoutComponent, section: new Section("about", "offer"), types: [environment.HEADER, environment.HOME], faIcon: faLaptop },
    { path: "offer", component: LayoutComponent, section: new Section("offer", "contact"), types: [environment.HEADER, environment.HOME], faIcon: faHandshake },
    { path: "contact", component: LayoutComponent, section: new Section("contact", "footer"), types: [environment.HEADER, environment.HOME], faIcon: faMailBulk },    
    { path: "", component: RouterComponent, section: new Section("", "") },
    { path: "**", component: RouterComponent, section: new Section("404", "404") },
  ];

  currentRoute = RoutingService.routes.find(r => r.path == "");
  currentUrl = "";
  historyCounter: number = 0;

  constructor(private router: Router, private header: HeaderService, public location: Location, @Inject(DOCUMENT) private document: Document, private scrollService: ScrollService) { }

  redirect(fragment: string | null) {
    let route = RoutingService.routes.find(r => r.path == fragment);
    let url = RoutingService.routes[0].path;
    if (route) {
      url = route?.path;
    }
    this.currentUrl = url;
    if (route?.component != this.currentRoute?.component) {
      this.router.navigateByUrl(url);
      this.currentRoute = route;
    }
    setTimeout(() => {
      try {
        this.scrollService.scrollToView(url, true)
      }
      finally {
        this.replaceState();
      }
    }, 10);
  }
  replaceState() {
    this.location.replaceState(`#${this.currentUrl}`);
  }
  goBack() {
    if (navigator.userAgent.includes('Firefox')) {
      history.go(-1);
    }
    else {
      setTimeout(() => {
        console.log(this.historyCounter)
        if (this.historyCounter < 1) {
          this.historyCounter++;
          history.go(0);
        }
        else {
          this.historyCounter = 0;
          history.go(-1);
        }
      }, 300);
    }
  }
  resetHistoryCounter() {
    this.historyCounter = 0;
  }
}
