import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() type = environment.HEADER;
  classes: string = "logo";
  @Input() size = "";

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    if (this.size != "") {
      this.classes = this.classes + ` logo-${this.size} `
    }
  }

  onClick() {
    this.routingService.redirect("home")
  }
}
