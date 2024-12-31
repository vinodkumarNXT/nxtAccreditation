import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsAddComponent } from './class-rooms-add.component';

describe('ClassRoomsAddComponent', () => {
  let component: ClassRoomsAddComponent;
  let fixture: ComponentFixture<ClassRoomsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoomsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassRoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
