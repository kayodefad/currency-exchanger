import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CoreModule } from '../../core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CoreModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
