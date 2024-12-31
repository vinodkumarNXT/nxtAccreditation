import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsOrganizedComponent } from './competitions-organized.component';

describe('CompetitionsOrganizedComponent', () => {
  let component: CompetitionsOrganizedComponent;
  let fixture: ComponentFixture<CompetitionsOrganizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionsOrganizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionsOrganizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
