import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-set-language',
  templateUrl: './set-language.component.html',
  styleUrls: ['./set-language.component.scss']
})
export class SetLanguageComponent implements OnInit {

  constructor(public language: LanguageService, private routingService: RoutingService) { }

  ngOnInit(): void {
  }
  setLanguage(lang: string): void {
    this.language.setLanguage(lang);
  }
}
