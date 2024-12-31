import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentPublishedViewComponent } from './patent-published-view.component';

describe('PatentPublishedViewComponent', () => {
  let component: PatentPublishedViewComponent;
  let fixture: ComponentFixture<PatentPublishedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentPublishedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatentPublishedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
