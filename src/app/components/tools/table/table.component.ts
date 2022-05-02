import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from 'src/app/models/table-row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers: any[] = [];  
  @Input() rows: TableRow[] = [];
  @Input() border = false;
  classes: string = "table ";

  constructor() { }

  ngOnInit(): void {
    if (this.border){
      this.classes += "border"
    }
  }

}
