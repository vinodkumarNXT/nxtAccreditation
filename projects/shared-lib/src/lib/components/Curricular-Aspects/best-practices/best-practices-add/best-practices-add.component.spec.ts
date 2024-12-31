import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticesAddComponent } from './best-practices-add.component';

describe('BestPracticesAddComponent', () => {
  let component: BestPracticesAddComponent;
  let fixture: ComponentFixture<BestPracticesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPracticesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestPracticesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
