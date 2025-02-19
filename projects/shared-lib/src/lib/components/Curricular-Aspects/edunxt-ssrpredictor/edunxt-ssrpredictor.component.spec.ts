import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdunxtSSRPredictorComponent } from './edunxt-ssrpredictor.component';

describe('EdunxtSSRPredictorComponent', () => {
  let component: EdunxtSSRPredictorComponent;
  let fixture: ComponentFixture<EdunxtSSRPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdunxtSSRPredictorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdunxtSSRPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
