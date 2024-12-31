import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsViewComponent } from './citations-view.component';

describe('CitationsViewComponent', () => {
  let component: CitationsViewComponent;
  let fixture: ComponentFixture<CitationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
