import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'converter',
    pathMatch: 'full',
  },
  {
    path: 'converter',
    component: MainComponent,
    loadChildren: () =>
      import('./converter/converter.module').then((m) => m.ConverterModule),
  },
];
