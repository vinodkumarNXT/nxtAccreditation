import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniContributionComponent } from './alumni-contribution.component';

describe('AlumniContributionComponent', () => {
  let component: AlumniContributionComponent;
  let fixture: ComponentFixture<AlumniContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniContributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
