import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsOrganizedAddComponent } from './competitions-organized-add.component';

describe('CompetitionsOrganizedAddComponent', () => {
  let component: CompetitionsOrganizedAddComponent;
  let fixture: ComponentFixture<CompetitionsOrganizedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionsOrganizedAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionsOrganizedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
