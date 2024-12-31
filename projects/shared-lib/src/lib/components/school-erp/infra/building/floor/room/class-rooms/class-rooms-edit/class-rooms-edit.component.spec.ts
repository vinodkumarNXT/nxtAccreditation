import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsEditComponent } from './class-rooms-edit.component';

describe('ClassRoomsEditComponent', () => {
  let component: ClassRoomsEditComponent;
  let fixture: ComponentFixture<ClassRoomsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoomsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassRoomsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
