import { NgModule } from '@angular/core';
import { EurUsdComponent } from './eur-usd.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './eur-usd.routes';
import { HistoricalRatesChartComponent } from './components/historical-rates-chart/historical-rates-chart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EurUsdComponent, HistoricalRatesChartComponent],
  imports: [CoreModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class EurUsdModule {}
