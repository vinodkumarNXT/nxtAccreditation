import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAssociationComponent } from './alumni-association.component';

describe('AlumniAssociationComponent', () => {
  let component: AlumniAssociationComponent;
  let fixture: ComponentFixture<AlumniAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAssociationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
