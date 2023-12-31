import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  @Input() title!: string;
  @Input() calltoAction?: { text: string; link: string };
  @Input() currencyFrom?: string;
}
