import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegradableEditComponent } from './degradable-edit.component';

describe('DegradableEditComponent', () => {
  let component: DegradableEditComponent;
  let fixture: ComponentFixture<DegradableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegradableEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegradableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
