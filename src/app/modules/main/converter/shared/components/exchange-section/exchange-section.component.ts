import { Component, Input, OnInit } from '@angular/core';
import { CurrencyFacade } from 'src/app/core/facades/currency.facade';
import { Currency } from 'src/app/core/models/currency.model';
import { ExchangeRates } from 'src/app/core/models/exchangeRate.model';

@Component({
  selector: 'app-exchange-section',
  templateUrl: './exchange-section.component.html',
  styleUrls: ['./exchange-section.component.scss'],
})
export class ExchangeSectionComponent implements OnInit {
  @Input() showDetailsButton?: boolean;
  @Input() disableFromSelect: boolean = false;
  public amount!: number;
  public currencyFrom!: Currency;
  public currencyTo!: Currency;
  public convertedResult: string = '';
  public convertedResult2: string = '';
  public disableElements = false;
  exchangeRates!: ExchangeRates | null;

  constructor(public currencyFacade: CurrencyFacade) {}

  ngOnInit(): void {
    this.currencyFacade.amount$.subscribe((amount) => (this.amount = amount));
    this.currencyFacade.currencyFrom$.subscribe(
      (currencyFrom) => (this.currencyFrom = currencyFrom)
    );
    this.currencyFacade.currencyTo$.subscribe(
      (currencyTo) => (this.currencyTo = currencyTo)
    );
    this.currencyFacade.calculatedResult$.subscribe((calculatedResult) => {
      this.convertedResult = `${this.amount.toFixed(2)} ${
        this.currencyFrom.symbol
      } = ${calculatedResult.toFixed(2)} ${this.currencyTo.symbol}`;
      this.convertedResult2 = `${calculatedResult.toFixed(2)} ${
        this.currencyTo.symbol
      }`;
    });
    this.setExchangeRates();
  }

  setExchangeRates() {
    this.currencyFacade.exchangeRates$.subscribe(
      (res) => (this.exchangeRates = res)
    );
  }

  public selectCurrency(event: Event, category: 'from' | 'to'): void {
    this.currencyFacade.setCurrency(
      (<HTMLSelectElement>event.target)?.value,
      category
    );
  }

  public setAmount(event: Event): void {
    const target = <HTMLInputElement>event.target;
    if (Number(target?.value)) {
      this.disableElements = false;
      this.currencyFacade.setAmount(Number(target?.value));
    } else {
      this.disableElements = true;
    }
  }

  convert() {
    this.currencyFacade.calculateResult();
    this.currencyFacade.convertToPopularCurrencies();
  }
}
