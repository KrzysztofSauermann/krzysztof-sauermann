import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { faTimes, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryElement } from 'src/app/models/gallery-element';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  faTimes = faTimes;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  currentElement: number = 0;
  showError = false;
  @Input() shown = false;
  @Output() shownChange = new EventEmitter<boolean>();

  @Input() elements: GalleryElement[] = [];
  @Input() defaultHidden = false;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    if (this.shown) {
      this.show();
    }
  }
  show() {
    if (this.elements.length > 0) {     
      this.showError = false;
      this.scrollService.setScroll(!this.shown);
      this.shownChange.emit(this.shown);
    }
    else {
      this.showError = true;
      setTimeout(() => {
        this.hide();
      }, 500);
    }
  }
  hide() {
    this.shown = false;
    this.scrollService.setScroll(!this.shown);
    this.shownChange.emit(this.shown);
  }
  goLeft() {
    if (this.currentElement == 0) {
      this.currentElement = this.elements.length - 1;
      return;
    }
    this.currentElement -= 1;
  }
  goRight() {
    if (this.currentElement == this.elements.length - 1) {
      this.currentElement = 0;
      return;
    }
    this.currentElement += 1;
  }
  @HostListener('document:keyup.arrowleft', ['$event'])
  onKeydownLeft(event: KeyboardEvent) {
    event.preventDefault();
    this.goLeft();
  }
  @HostListener('document:keyup.arrowright', ['$event'])
  onKeydownRight(event: KeyboardEvent) {
    event.preventDefault();
    this.goRight();
  }
  @HostListener('document:keyup.escape', ['$event'])
  onKeydownEscape(event: KeyboardEvent) {
    event.preventDefault();
    this.hide();
  }
}