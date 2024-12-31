import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentPublishedAddComponent } from './patent-published-add.component';

describe('PatentPublishedAddComponent', () => {
  let component: PatentPublishedAddComponent;
  let fixture: ComponentFixture<PatentPublishedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentPublishedAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatentPublishedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
