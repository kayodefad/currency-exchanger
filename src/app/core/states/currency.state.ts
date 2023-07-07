import { Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { ExchangeRates } from '../models/exchangeRate.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyState {
  private readonly _amount$ = new BehaviorSubject<number>(1);
  private readonly _calculatedResult$ = new BehaviorSubject<number>(1);
  private readonly _currencies$ = new BehaviorSubject<Currency[]>([]);
  private readonly _exchangeRates$ = new BehaviorSubject<ExchangeRates | null>(
    null
  );
  private readonly _currencyFrom$ = new BehaviorSubject<Currency>({
    symbol: 'EUR',
  });
  private readonly _currencyTo$ = new BehaviorSubject<Currency>({
    symbol: 'USD',
  });

  public amount$ = this._amount$.asObservable();
  public calculatedResult$ = this._calculatedResult$.asObservable();
  public currencies$ = this._currencies$.asObservable();
  public exchangeRates$ = this._exchangeRates$.asObservable();
  public currencyFrom$ = this._currencyFrom$.asObservable();
  public currencyTo$ = this._currencyTo$.asObservable();

  constructor(private readonly _svc: CurrencyService) {
    this._svc
      .getPopularCurrencies$()
      .subscribe((currencies: Currency[]) =>
        this._currencies$.next(currencies)
      );
    this.getExchangeRates();
  }

  public setCurrency(currencySymbol: string, category: 'from' | 'to'): void {
    const currency = this._currencies$.value.find(
      (currency: Currency) => currency.symbol === currencySymbol
    );
    category === 'from'
      ? this._currencyFrom$.next(currency!)
      : this._currencyTo$.next(currency!);
  }

  public setAmount(amount: number): void {
    this._amount$.next(amount);
  }

  public getExchangeRates(): void {
    if (localStorage.getItem('currencyExchangeRates') !== null) {
      const exchangeRates: ExchangeRates = JSON.parse(
        localStorage.getItem('currencyExchangeRates')!
      );
      this._exchangeRates$.next(exchangeRates);
      console.log(exchangeRates);
      this.calculateResult();
    } else {
      this._svc.getExchangeRatesForCurrencies().subscribe((exchangeRates) => {
        this._exchangeRates$.next(exchangeRates);
        this.calculateResult();
      });
    }
  }

  public calculateResult(): void {
    if (this._exchangeRates$.value) {
      const calculatedResult =
        this._amount$.value *
        this._exchangeRates$.value[this._currencyFrom$.value.symbol][
          this._currencyTo$.value.symbol
        ];
      this._calculatedResult$.next(calculatedResult);
    }
  }
}

// {
//   "EUR": {
//       "USD": 1.096707,
//       "EUR": 1,
//       "JPY": 155.857488,
//       "GBP": 0.854593,
//       "AUD": 1.639323,
//       "CAD": 1.455967,
//       "CHF": 0.97477,
//       "HKD": 8.5847,
//       "NZD": 1.766132
//   },
//   "USD": {
//       "USD": 1,
//       "EUR": 0.91182,
//       "JPY": 142.11406,
//       "GBP": 0.77924,
//       "AUD": 1.49477,
//       "CAD": 1.32758,
//       "CHF": 0.88882,
//       "HKD": 7.82771,
//       "NZD": 1.6104
//   },
//   "JPY": {
//       "USD": 0.00704,
//       "EUR": 0.00642,
//       "JPY": 1,
//       "GBP": 0.00548,
//       "AUD": 0.01052,
//       "CAD": 0.00934,
//       "CHF": 0.00625,
//       "HKD": 0.05508,
//       "NZD": 0.01133
//   },
//   "GBP": {
//       "USD": 1.28331,
//       "EUR": 1.17015,
//       "JPY": 182.37628,
//       "GBP": 1,
//       "AUD": 1.91825,
//       "CAD": 1.7037,
//       "CHF": 1.14062,
//       "HKD": 10.04537,
//       "NZD": 2.06664
//   },
//   "AUD": {
//       "USD": 0.669,
//       "EUR": 0.61001,
//       "JPY": 95.0743,
//       "GBP": 0.52131,
//       "AUD": 1,
//       "CAD": 0.88815,
//       "CHF": 0.59462,
//       "HKD": 5.23673,
//       "NZD": 1.07735
//   },
//   "CAD": {
//       "USD": 0.75325,
//       "EUR": 0.68683,
//       "JPY": 107.0474,
//       "GBP": 0.58696,
//       "AUD": 1.12593,
//       "CAD": 1,
//       "CHF": 0.6695,
//       "HKD": 5.89622,
//       "NZD": 1.21303
//   },
//   "CHF": {
//       "USD": 1.12509,
//       "EUR": 1.02588,
//       "JPY": 159.89155,
//       "GBP": 0.87671,
//       "AUD": 1.68175,
//       "CAD": 1.49365,
//       "CHF": 1,
//       "HKD": 8.8069,
//       "NZD": 1.81184
//   },
//   "HKD": {
//       "USD": 0.12775,
//       "EUR": 0.11649,
//       "JPY": 18.15526,
//       "GBP": 0.09955,
//       "AUD": 0.19096,
//       "CAD": 0.1696,
//       "CHF": 0.11355,
//       "HKD": 1,
//       "NZD": 0.20573
//   },
//   "NZD": {
//       "USD": 0.62097,
//       "EUR": 0.56621,
//       "JPY": 88.24793,
//       "GBP": 0.48388,
//       "AUD": 0.9282,
//       "CAD": 0.82438,
//       "CHF": 0.55192,
//       "HKD": 4.86074,
//       "NZD": 1
//   }
// }
