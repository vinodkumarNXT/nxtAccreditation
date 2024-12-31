import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtGrantsViewComponent } from './govt-grants-view.component';

describe('GovtGrantsViewComponent', () => {
  let component: GovtGrantsViewComponent;
  let fixture: ComponentFixture<GovtGrantsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtGrantsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtGrantsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
