import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniContributionEditComponent } from './alumni-contribution-edit.component';

describe('AlumniContributionEditComponent', () => {
  let component: AlumniContributionEditComponent;
  let fixture: ComponentFixture<AlumniContributionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniContributionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniContributionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
