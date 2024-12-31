import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricularRelevanceComponent } from './curricular-developement.component';

describe('CurricularRelevanceComponent', () => {
  let component: CurricularRelevanceComponent;
  let fixture: ComponentFixture<CurricularRelevanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurricularRelevanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurricularRelevanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
