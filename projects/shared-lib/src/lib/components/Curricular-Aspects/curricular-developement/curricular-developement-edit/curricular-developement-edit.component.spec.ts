import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricularRelevanceEditComponent } from './curricular-developement-edit.component';

describe('CurricularRelevanceEditComponent', () => {
  let component: CurricularRelevanceEditComponent;
  let fixture: ComponentFixture<CurricularRelevanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurricularRelevanceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurricularRelevanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
