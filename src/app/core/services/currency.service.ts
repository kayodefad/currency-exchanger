import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';
import { Currency } from '../models/currency.model';
import { popularCurrencies } from './mocks/data/popularCurrencies';
import { HttpClient } from '@angular/common/http';
import {
  ExchangeRateAPIResponse,
  ExchangeRates,
} from '../models/exchangeRate.model';
import { computeExchangeRates } from './utils/utils';

const accessKey = 'b5ebef8ee0fe345348837ef276461a57';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'http://data.fixer.io/api/';

  constructor(private http: HttpClient) {}

  getPopularCurrencies$(): Observable<Currency[]> {
    return of(popularCurrencies);
  }

  getExchangeRatesForCurrencies(): Observable<ExchangeRates> {
    return this.http
      .get<ExchangeRateAPIResponse>(
        `${this.apiUrl}latest?access_key=${accessKey}&base=EUR&symbols=USD,EUR,JPY,GBP,AUD,CAD,CHF,HKD,NZD`
      )
      .pipe(
        map((response) => ({ [response.base]: response.rates })),
        map((response) => {
          // I computed for the other exchange rates since the free API is only limited to EUR
          let EURRates = response;
          let results = EURRates;
          popularCurrencies.forEach((currency) => {
            if (currency.symbol !== 'EUR') {
              results = {
                ...results,
                ...computeExchangeRates(currency.symbol, EURRates),
              };
            }
          });
          localStorage.setItem(
            'currencyExchangeRates',
            JSON.stringify(results)
          );
          return results;
        })
      );
  }
}
