import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchloarshipTypeComponent } from './schloarship-type.component';

describe('SchloarshipTypeComponent', () => {
  let component: SchloarshipTypeComponent;
  let fixture: ComponentFixture<SchloarshipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchloarshipTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchloarshipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
