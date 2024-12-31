import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentPublishedEditComponent } from './patent-published-edit.component';

describe('PatentPublishedEditComponent', () => {
  let component: PatentPublishedEditComponent;
  let fixture: ComponentFixture<PatentPublishedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentPublishedEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatentPublishedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
