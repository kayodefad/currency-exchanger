import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './details.routes';
import { HistoricalRatesChartComponent } from './components/historical-rates-chart/historical-rates-chart.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent, HistoricalRatesChartComponent],
  imports: [CoreModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class DetailsModule {}
