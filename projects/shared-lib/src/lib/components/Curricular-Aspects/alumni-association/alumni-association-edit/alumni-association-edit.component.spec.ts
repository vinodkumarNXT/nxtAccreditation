import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAssociationEditComponent } from './alumni-association-edit.component';

describe('AlumniAssociationEditComponent', () => {
  let component: AlumniAssociationEditComponent;
  let fixture: ComponentFixture<AlumniAssociationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAssociationEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniAssociationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
