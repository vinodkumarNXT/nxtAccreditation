import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniContributionViewComponent } from './alumni-contribution-view.component';

describe('AlumniContributionViewComponent', () => {
  let component: AlumniContributionViewComponent;
  let fixture: ComponentFixture<AlumniContributionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniContributionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniContributionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
