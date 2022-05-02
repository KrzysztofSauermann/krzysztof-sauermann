import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input()
  message: string = "Wait...";

  @Input()
  blockUI: boolean = false;

  @Input()
  show: boolean = true;

  constructor(public language: LanguageService, private scrollService: ScrollService) { }

  ngOnInit(): void {
    if (this.blockUI) {
      this.scrollService.setScroll(false);
    }
  }

}
