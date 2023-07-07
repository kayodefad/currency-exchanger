import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConvertedResultsComponent } from './components/converted-results/converted-results.component';
import { CoreModule } from 'src/app/core/core.module';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ConvertedResultsComponent],
  imports: [CoreModule, RouterModule.forChild(ROUTES), SharedModule],
  exports: [RouterModule],
})
export class HomeModule {}
