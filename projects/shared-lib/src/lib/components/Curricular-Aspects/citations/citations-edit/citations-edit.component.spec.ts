import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsEditComponent } from './citations-edit.component';

describe('CitationsEditComponent', () => {
  let component: CitationsEditComponent;
  let fixture: ComponentFixture<CitationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
