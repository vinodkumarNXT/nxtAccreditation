import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSemesterEditComponent } from './end-semester-edit.component';

describe('EndSemesterEditComponent', () => {
  let component: EndSemesterEditComponent;
  let fixture: ComponentFixture<EndSemesterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndSemesterEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndSemesterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
