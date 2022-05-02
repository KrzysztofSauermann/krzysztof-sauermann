import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {

  @Input() link!: SafeUrl;
  @Input() src: string = "";
  @Input() color: string = "";
  style = "";
  @Input() faIcon: any;
  @Input() height: number = 128;
  @Input() width: number = 128;
  
  constructor() { }

  ngOnInit(): void {
    this.style = `color:#${this.color}`;
  }
}
