import { Component, OnInit } from '@angular/core';
import { GalleryElement } from 'src/app/models/gallery-element';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  popupShown = false;
  galleryShown = false;
  galleryElements: GalleryElement[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initQualifications()
  }
  showPopup() {
    this.popupShown = true;
  }
  showGallery() {
    this.galleryShown = true;
  }
  initQualifications() {
    this.galleryElements.push(new GalleryElement(`Image description`, [`assets/images/logo.ico`]));
    this.galleryElements.push(new GalleryElement(`Image pl`, [`assets/images/pl.png`]));
    this.galleryElements.push(new GalleryElement(`Image en`, [`assets/images/en.png`]));
    this.galleryElements.push(new GalleryElement(`Two Images`, [`assets/images/pl.png`, `assets/images/en.png`]));
  }
}
