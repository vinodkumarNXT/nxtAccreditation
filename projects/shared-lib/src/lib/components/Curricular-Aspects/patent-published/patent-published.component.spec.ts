import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentPublishedComponent } from './patent-published.component';

describe('PatentPublishedComponent', () => {
  let component: PatentPublishedComponent;
  let fixture: ComponentFixture<PatentPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentPublishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatentPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
