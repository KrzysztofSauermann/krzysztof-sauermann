import { Component, OnInit } from '@angular/core';
import { TableRow } from 'src/app/models/table-row';
import { LanguageService } from 'src/app/services/language.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  headers = ['one', 'two'];
  rows: TableRow[] = [];

  constructor(public language: LanguageService, private routingService: RoutingService) { }

  ngOnInit(): void {
    this.rows.push(new TableRow(1, ['one', 'two']));
    this.rows.push(new TableRow(1, ['tree', 'four']));
    this.rows.push(new TableRow(2, ['five']));
  }
  goToContact(){
    this.routingService.redirect('contact');
  }

}
