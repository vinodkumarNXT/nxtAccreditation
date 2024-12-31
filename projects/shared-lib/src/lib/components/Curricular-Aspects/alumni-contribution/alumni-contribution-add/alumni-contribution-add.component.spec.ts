import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniContributionAddComponent } from './alumni-contribution-add.component';

describe('AlumniContributionAddComponent', () => {
  let component: AlumniContributionAddComponent;
  let fixture: ComponentFixture<AlumniContributionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniContributionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniContributionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
