import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copy!: string;
  constructor() { }

  ngOnInit(): void {
    this.copy = `${new Date().getFullYear()} ${environment.Copy}`;
  }

}
