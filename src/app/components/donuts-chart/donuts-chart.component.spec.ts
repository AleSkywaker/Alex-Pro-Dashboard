import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsChartComponent } from './donuts-chart.component';

describe('DonutsChartComponent', () => {
  let component: DonutsChartComponent;
  let fixture: ComponentFixture<DonutsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
