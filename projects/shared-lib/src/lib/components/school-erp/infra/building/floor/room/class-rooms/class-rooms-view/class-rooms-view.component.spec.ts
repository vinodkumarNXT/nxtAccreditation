import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsViewComponent } from './class-rooms-view.component';

describe('ClassRoomsViewComponent', () => {
  let component: ClassRoomsViewComponent;
  let fixture: ComponentFixture<ClassRoomsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoomsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassRoomsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
