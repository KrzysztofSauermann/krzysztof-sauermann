import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonClass: string = "button ";
  @Input() type: string = environment.Standard;
  @Input() isBig: boolean = false;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.isBig){
      this.buttonClass = this.buttonClass + " button-big "
    }    
    this.buttonClass += this.type;    
  }

  onClickEvent(e:any) {   
    this.onClick.emit(e);
  }
}