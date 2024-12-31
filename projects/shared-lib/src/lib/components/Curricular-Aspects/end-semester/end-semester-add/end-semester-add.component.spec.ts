import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSemesterAddComponent } from './end-semester-add.component';

describe('EndSemesterAddComponent', () => {
  let component: EndSemesterAddComponent;
  let fixture: ComponentFixture<EndSemesterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndSemesterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndSemesterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
