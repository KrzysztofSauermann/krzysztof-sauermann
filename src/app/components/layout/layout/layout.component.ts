import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('offer') offer!: ElementRef;

  constructor(private routingService: RoutingService, private scrollService: ScrollService) { }

  ngAfterViewInit(): void {
    this.routingService.replaceState();
    setTimeout(() => {
      this.routingService.resetHistoryCounter();
    }, 1000);
  }
  @HostListener('window:scroll', ['$event.target']) onScroll(e: any) {
    this.scrollService.onScroll(e);
  }
}
