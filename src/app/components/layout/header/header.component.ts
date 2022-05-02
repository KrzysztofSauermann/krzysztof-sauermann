import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerClasses: string = "";
  
  constructor(public header: HeaderService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scroll() {
    this.headerClasses = this.header.getClasses(); 
  }
}
