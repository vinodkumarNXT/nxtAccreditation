import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtGrantsEditComponent } from './govt-grants-edit.component';

describe('GovtGrantsEditComponent', () => {
  let component: GovtGrantsEditComponent;
  let fixture: ComponentFixture<GovtGrantsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtGrantsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtGrantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
