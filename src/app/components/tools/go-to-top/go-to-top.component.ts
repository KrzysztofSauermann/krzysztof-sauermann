import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss']
})
export class GoToTopComponent implements OnInit {
  faArrowCircleUp = faArrowCircleUp;
  constructor(private scrollService: ScrollService, public header: HeaderService) { }

  ngOnInit(): void {
  }
  goTop() {
    this.scrollService.scrollToView('home', true);
  }
}
