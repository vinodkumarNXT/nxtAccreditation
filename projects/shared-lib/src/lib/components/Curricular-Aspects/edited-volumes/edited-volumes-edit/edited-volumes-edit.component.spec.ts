import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedVolumesEditComponent } from './edited-volumes-edit.component';

describe('EditedVolumesEditComponent', () => {
  let component: EditedVolumesEditComponent;
  let fixture: ComponentFixture<EditedVolumesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditedVolumesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditedVolumesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
