import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSemesterComponent } from './end-semester.component';

describe('EndSemesterComponent', () => {
  let component: EndSemesterComponent;
  let fixture: ComponentFixture<EndSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndSemesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
