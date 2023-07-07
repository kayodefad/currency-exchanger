import { ExchangeRates, RateSymbol } from '../../models/exchangeRate.model';

export function computeExchangeRates(
  baseCurrency: RateSymbol,
  rates: ExchangeRates
) {
  const exchangeRates: ExchangeRates = {
    [baseCurrency]: {
      USD: 0,
      EUR: 0,
      JPY: 0,
      GBP: 0,
      AUD: 0,
      CAD: 0,
      CHF: 0,
      HKD: 0,
      NZD: 0,
    },
  };
  const EURRates = rates['EUR'];
  const baseCurrencyEURRate = rates['EUR'][baseCurrency];
  Object.keys(EURRates).forEach(
    (r) =>
      (exchangeRates[baseCurrency][r as RateSymbol] = +(
        EURRates[r as RateSymbol] / baseCurrencyEURRate
      ).toFixed(5))
  );
  return exchangeRates;
}
