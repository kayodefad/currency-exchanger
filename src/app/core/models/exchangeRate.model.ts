export interface ExchangeRateAPIResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}

export interface Rates {
  USD: number;
  EUR: number;
  JPY: number;
  GBP: number;
  AUD: number;
  CAD: number;
  CHF: number;
  HKD: number;
  NZD: number;
}

export interface ExchangeRates {
  [key: string]: Rates;
}

export type RateSymbol =
  | 'USD'
  | 'EUR'
  | 'JPY'
  | 'GBP'
  | 'AUD'
  | 'CAD'
  | 'CHF'
  | 'HKD'
  | 'NZD';
