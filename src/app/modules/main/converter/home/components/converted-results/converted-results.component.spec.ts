import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedResultsComponent } from './converted-results.component';

describe('ConvertedResultsComponent', () => {
  let component: ConvertedResultsComponent;
  let fixture: ComponentFixture<ConvertedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertedResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
