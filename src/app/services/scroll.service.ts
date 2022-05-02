import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { HeaderService } from './header.service';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public showHeader = false;

  prevSection = "";
  currentSection: any = RoutingService.routes[0];
  currentPosition: number = 0;

  constructor(private router: Router, public location: Location, private header: HeaderService, @Inject(DOCUMENT) private document: Document) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  setScroll(enabled: boolean) {
    this.document.body.style.overflow = enabled ? "" : "hidden";
  }

  onScroll(e: any) {
    this.toggleHeader(e);
    this.currentSection = RoutingService.routes.find(a => window.scrollY + 1 >= a.section.getFirstStartingPoint() && window.scrollY + 1 < a.section.getSecondStartingPoint()); 
   
    if (this.prevSection != this.currentSection?.path!) {
      this.replaceState(this.currentSection?.path!);
      this.prevSection = this.currentSection?.path!;
    }
  }

  isActive(fragment: string) {
    return this.currentSection?.path! != "" ? this.currentSection?.path! == fragment : "home" == fragment;
  }

  toggleHeader(e: any) {
    let scroll = e.scrollingElement.scrollTop;
    let first = (window.innerHeight / 2);
    let second = window.innerHeight / 1.4;
    let down = scroll > this.currentPosition;
    let up = scroll < this.currentPosition;

    if (down && window.scrollY < first || up && window.scrollY < first) {
      this.header.showSlideDownAnimation = false;
      this.header.showSlideUpAnimation = false;
    }
    else if (down && window.scrollY > first && window.scrollY < second) {
      this.header.showSlideDownAnimation = true;
    }
    else if (up && window.scrollY > first && window.scrollY < second) {
      this.header.showSlideUpAnimation = true;
      this.header.showSlideDownAnimation = false;
    }
    else if (window.scrollY >= window.innerHeight / 2) {
      this.header.showSlideDownAnimation = true;
    }
    this.currentPosition = scroll;
  }

  scrollToView(url: string, isSmooth: boolean) {
    var behavior: any = { behavior: 'auto' }
    if (isSmooth) {
      behavior = { behavior: 'smooth' };
    } 
    this.document.getElementById(url)?.scrollIntoView(behavior);
  
  }

  private replaceState(url: string) {
    if (url) {
      this.location.replaceState('#' + url);
    }
  }
}
