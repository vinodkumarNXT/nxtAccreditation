import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchloarshipTypeEditComponent } from './schloarship-type-edit.component';

describe('SchloarshipTypeEditComponent', () => {
  let component: SchloarshipTypeEditComponent;
  let fixture: ComponentFixture<SchloarshipTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchloarshipTypeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchloarshipTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
