import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchloarshipTypeAddComponent } from './schloarship-type-add.component';

describe('SchloarshipTypeAddComponent', () => {
  let component: SchloarshipTypeAddComponent;
  let fixture: ComponentFixture<SchloarshipTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchloarshipTypeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchloarshipTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
