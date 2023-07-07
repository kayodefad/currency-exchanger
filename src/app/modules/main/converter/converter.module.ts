import { NgModule } from '@angular/core';
import { ConverterComponent } from './converter.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './converter.routes';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CoreModule, RouterModule.forChild(ROUTES)],
})
export class ConverterModule {}
