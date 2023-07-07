import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CurrencyFacade } from 'src/app/core/facades/currency.facade';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  callToAction = { text: 'Back to Home', link: '/' };

  constructor(
    private route: ActivatedRoute,
    public currencyFacade: CurrencyFacade
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      // Access and handle the query parameters here
      const pair = params.get('pair');

      if (pair === 'eur-usd') {
        this.currencyFacade.setCurrency('EUR', 'from');
        this.currencyFacade.setCurrency('USD', 'to');
        // this.currencyFacade.calculateResult();
      } else if (pair === 'eur-gbp') {
        this.currencyFacade.setCurrency('EUR', 'from');
        this.currencyFacade.setCurrency('GBP', 'to');
        // this.currencyFacade.calculateResult();
      }
    });
  }
}
