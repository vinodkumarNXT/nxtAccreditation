import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricularRelevanceViewComponent } from './curricular-relevance-view.component';

describe('CurricularRelevanceViewComponent', () => {
  let component: CurricularRelevanceViewComponent;
  let fixture: ComponentFixture<CurricularRelevanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurricularRelevanceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurricularRelevanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
