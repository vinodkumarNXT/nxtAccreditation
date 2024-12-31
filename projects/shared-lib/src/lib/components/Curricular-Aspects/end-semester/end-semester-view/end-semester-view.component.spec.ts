import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSemesterViewComponent } from './end-semester-view.component';

describe('EndSemesterViewComponent', () => {
  let component: EndSemesterViewComponent;
  let fixture: ComponentFixture<EndSemesterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndSemesterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndSemesterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
