import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  faTimes = faTimes;
  @Input() shown = false;
  @Output() shownChange = new EventEmitter<boolean>();

  @Input() title: string = "Title";
  @Input() defaultHidden = false;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void { }

  ngDoCheck() {
    if (this.shown) {
      this.showPopup();
    }
  }

  showPopup() {
    this.scrollService.setScroll(!this.shown);
    this.shownChange.emit(this.shown);
  }
  hidePopup() {
    this.shown = false;
    this.scrollService.setScroll(!this.shown);
    this.shownChange.emit(this.shown);
  }
  @HostListener('document:keyup.escape', ['$event'])
  onKeydownEscape(event: KeyboardEvent) {
    event.preventDefault();
    this.hidePopup();
  }
}
