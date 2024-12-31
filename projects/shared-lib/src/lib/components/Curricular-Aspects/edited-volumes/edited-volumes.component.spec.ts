import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedVolumesComponent } from './edited-volumes.component';

describe('EditedVolumesComponent', () => {
  let component: EditedVolumesComponent;
  let fixture: ComponentFixture<EditedVolumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditedVolumesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditedVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
