import { Component, Input, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  faPhone = faPhone;
  @Input() 
  href!:string; 

  constructor() { }

  ngOnInit(): void {
  }

}
