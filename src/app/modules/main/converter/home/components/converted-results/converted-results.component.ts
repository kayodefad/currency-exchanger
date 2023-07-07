import { Component, OnInit } from '@angular/core';
import { CurrencyFacade } from 'src/app/core/facades/currency.facade';

@Component({
  selector: 'app-converted-results',
  templateUrl: './converted-results.component.html',
  styleUrls: ['./converted-results.component.scss'],
})
export class ConvertedResultsComponent {
  constructor(public currencyFacade: CurrencyFacade) {}
}
