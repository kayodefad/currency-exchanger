import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConvertedResultsComponent } from './components/converted-results/converted-results.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ConvertedResultsComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  exports: [RouterModule],
})
export class HomeModule {}
