import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './main.routing';
import { HeaderModule } from 'src/app/core/components/header/header.module';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(ROUTES), HeaderModule],
})
export class MainModule {}
