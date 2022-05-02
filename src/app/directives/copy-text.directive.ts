import { Directive, HostListener, ElementRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Directive({
  selector: '[copyText]'
})
export class CopyTextDirective {

  constructor(private el: ElementRef, private clipboard: ClipboardService) {  }

  @HostListener('click', ['$event'])
  copyText() {    
    const elementWithText = document.getElementById(this.el.nativeElement.getAttribute("copyTextId")); 
    const text = elementWithText?.innerText ? elementWithText?.innerText : "";
    this.clipboard.copy(text);           
  } 
}