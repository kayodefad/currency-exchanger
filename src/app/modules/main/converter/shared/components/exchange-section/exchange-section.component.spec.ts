import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSectionComponent } from './exchange-section.component';

describe('ExchangeSectionComponent', () => {
  let component: ExchangeSectionComponent;
  let fixture: ComponentFixture<ExchangeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
