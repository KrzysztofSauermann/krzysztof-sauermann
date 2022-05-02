import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  public showSlideDownAnimation: boolean = false;
  public showSlideUpAnimation: boolean = false;
  @Input()
  shown: boolean = false;

  constructor() { }

  getClasses() {
    let classes = "";
    if (this.shown) {
      classes += "header shown"
    }
    if (this.showSlideDownAnimation) {
      classes += "header slide-down";
    }
    else if (this.showSlideUpAnimation) {
      classes += "header slide-up";
    }
    return classes;
  }
  isShown() {
    return this.showSlideDownAnimation || this.showSlideUpAnimation || this.shown;
  }
  setHardShown(shown: boolean) {
    this.shown = shown;
  }
}