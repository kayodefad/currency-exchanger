import { Injectable } from '@angular/core';
import { CurrencyState } from '../states/currency.state';

@Injectable({
  providedIn: 'root',
})
export class CurrencyFacade {
  public currencies$ = this._state.currencies$;
  public amount$ = this._state.amount$;
  public calculatedResult$ = this._state.calculatedResult$;
  public exchangeRates$ = this._state.exchangeRates$;
  public currencyFrom$ = this._state.currencyFrom$;
  public currencyTo$ = this._state.currencyTo$;
  public setCurrency = this._state.setCurrency.bind(this._state);
  public setAmount = this._state.setAmount.bind(this._state);
  public getExchangeRates = this._state.getExchangeRates.bind(this._state);
  public calculateResult = this._state.calculateResult.bind(this._state);

  constructor(private readonly _state: CurrencyState) {}
}
