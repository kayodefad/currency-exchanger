import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'eur-usd',
    loadChildren: () =>
      import('./eur-usd/eur-usd.module').then((m) => m.EurUsdModule),
  },
];
