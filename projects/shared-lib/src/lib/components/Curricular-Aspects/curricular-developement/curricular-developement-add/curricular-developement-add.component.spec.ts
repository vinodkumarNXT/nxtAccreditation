import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricularRelevanceAddComponent } from './curricular-relevance-add.component';

describe('CurricularRelevanceAddComponent', () => {
  let component: CurricularRelevanceAddComponent;
  let fixture: ComponentFixture<CurricularRelevanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurricularRelevanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurricularRelevanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
