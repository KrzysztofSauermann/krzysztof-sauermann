import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dotnetYears: number = this.getYears(new Date(2014, 7, 1));
  trainerYears: number = this.getYears(new Date(2018, 9, 1));

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }
  private getYears(from: Date) {
    return Math.round((new Date().getTime() - from.getTime()) / 31556952000);
  }

}
