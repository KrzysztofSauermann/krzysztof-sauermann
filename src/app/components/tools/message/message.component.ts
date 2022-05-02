import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  info!: string | null;
  @Input()
  warning!: string | null;
  @Input()
  error!: string | null;
  @Input()
  miniseconds: number = 10000;
  
  @Input()
  show:boolean = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  faTimesCircle = faTimesCircle;
  message:string = "";
  messageClassName:string = "";
  title:string = "";
  ishiddenClass = "hidden"; 
 
  constructor(public language: LanguageService) { }
  
  ngOnInit(): void {
   
  }
  ngDoCheck() {
    if(this.show){
      this.showMessage();
    }
    else {
      this.closeMessage()
    }
  }
  showMessage(){
    if (this.info != null){
      this.messageClassName = "info";
      this.title = this.language.get(this.messageClassName);
      this.message = this.language.get(this.info);
    }
    else if (this.warning != null) {
      this.messageClassName = "warning";
      this.title = this.language.get(this.messageClassName);
      this.message = this.language.get(this.warning);
    }
    else if (this.error != null)
    {
      this.messageClassName = "error";
      this.title = this.language.get(this.messageClassName);
      this.message = this.language.get(this.error);
    }
    this.ishiddenClass = "";
    setTimeout(() => {
      this.closeMessage();
    }, this.miniseconds);
    this.showChange.emit(this.show);
  }
  closeMessage() {    
    this.ishiddenClass = "hidden"; 
    this.show = false;
    this.showChange.emit(this.show);
  }
}
