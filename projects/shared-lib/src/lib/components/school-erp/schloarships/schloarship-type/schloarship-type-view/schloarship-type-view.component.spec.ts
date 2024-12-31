import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchloarshipTypeViewComponent } from './schloarship-type-view.component';

describe('SchloarshipTypeViewComponent', () => {
  let component: SchloarshipTypeViewComponent;
  let fixture: ComponentFixture<SchloarshipTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchloarshipTypeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchloarshipTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
