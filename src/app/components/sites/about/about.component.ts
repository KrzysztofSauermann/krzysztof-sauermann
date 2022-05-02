import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dotnetYears: number = new Date().getFullYear() - new Date(2014,7,1).getFullYear();
  trainerYears: number = new Date().getFullYear() - new Date(2018,9,1).getFullYear();

  constructor(public language:LanguageService) { }

  ngOnInit(): void {
  }

}
