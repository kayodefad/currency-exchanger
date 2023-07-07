import { NgModule } from '@angular/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { CoreModule } from 'src/app/core/core.module';
import { ExchangeSectionComponent } from './components/exchange-section/exchange-section.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SubHeaderComponent, ExchangeSectionComponent],
  imports: [CoreModule, MatIconModule],
  exports: [SubHeaderComponent, ExchangeSectionComponent],
})
export class SharedModule {}
