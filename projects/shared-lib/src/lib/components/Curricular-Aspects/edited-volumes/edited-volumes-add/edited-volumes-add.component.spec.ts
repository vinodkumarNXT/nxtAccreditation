import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedVolumesAddComponent } from './edited-volumes-add.component';

describe('EditedVolumesAddComponent', () => {
  let component: EditedVolumesAddComponent;
  let fixture: ComponentFixture<EditedVolumesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditedVolumesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditedVolumesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
