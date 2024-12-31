import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsOrganizedViewComponent } from './competitions-organized-view.component';

describe('CompetitionsOrganizedViewComponent', () => {
  let component: CompetitionsOrganizedViewComponent;
  let fixture: ComponentFixture<CompetitionsOrganizedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionsOrganizedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionsOrganizedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
