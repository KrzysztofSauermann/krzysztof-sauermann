import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faCopy = faCopy;  
  faLinkedin = faLinkedin;
  linkedinLink: string = "https://www.linkedin.com/in/krzysztof-sauermann";
  linkedinLinkShort: string = "www.linkedin.com/in/krzysztof-sauermann";
  showMessage:boolean = false;

  constructor(public language: LanguageService) { }

  ngOnInit(): void {    
  }
  
  mailCopied():void {
    this.showMessage = true; 
  }  

}
