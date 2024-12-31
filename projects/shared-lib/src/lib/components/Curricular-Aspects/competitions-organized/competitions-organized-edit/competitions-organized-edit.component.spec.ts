import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsOrganizedEditComponent } from './competitions-organized-edit.component';

describe('CompetitionsOrganizedEditComponent', () => {
  let component: CompetitionsOrganizedEditComponent;
  let fixture: ComponentFixture<CompetitionsOrganizedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionsOrganizedEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionsOrganizedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
