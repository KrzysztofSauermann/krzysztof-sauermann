import { Directive, ElementRef, AfterViewInit  } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Directive({
  selector: '[appTranslate]'
})
export class TranslateDirective implements AfterViewInit  {

  originalText: string = "";
  constructor(private el: ElementRef, public language: LanguageService) { }

  ngAfterViewInit(): void {    
    this.originalText = this.el.nativeElement.innerText;    
  }
  ngAfterViewChecked() {
    this.el.nativeElement.innerText = this.language.get(this.originalText);
  }
}
