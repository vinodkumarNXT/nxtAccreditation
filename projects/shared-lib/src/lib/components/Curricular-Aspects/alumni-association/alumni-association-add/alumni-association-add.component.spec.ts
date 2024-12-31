import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAssociationAddComponent } from './alumni-association-add.component';

describe('AlumniAssociationAddComponent', () => {
  let component: AlumniAssociationAddComponent;
  let fixture: ComponentFixture<AlumniAssociationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAssociationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniAssociationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
