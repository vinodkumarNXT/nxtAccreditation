import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedVolumesViewComponent } from './edited-volumes-view.component';

describe('EditedVolumesViewComponent', () => {
  let component: EditedVolumesViewComponent;
  let fixture: ComponentFixture<EditedVolumesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditedVolumesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditedVolumesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
