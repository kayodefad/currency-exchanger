import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurUsdComponent } from './eur-usd.component';

describe('EurUsdComponent', () => {
  let component: EurUsdComponent;
  let fixture: ComponentFixture<EurUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EurUsdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EurUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
