import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  type = environment.HEADER;
  menuClasses: string = "header-menu";
  constructor(public routingService: RoutingService, public scrollService: ScrollService, public language: LanguageService) { }

  ngOnInit(): void {
    this.menuClasses = `${this.type}-menu`;
  }

  links() {
    return RoutingService.routes.filter(r => r.types?.includes(this.type)).map(({path, faIcon}) => ({ path, faIcon }));
  }
}
