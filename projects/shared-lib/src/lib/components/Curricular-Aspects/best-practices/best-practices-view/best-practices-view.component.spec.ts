import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticesViewComponent } from './best-practices-view.component';

describe('BestPracticesViewComponent', () => {
  let component: BestPracticesViewComponent;
  let fixture: ComponentFixture<BestPracticesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPracticesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestPracticesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
