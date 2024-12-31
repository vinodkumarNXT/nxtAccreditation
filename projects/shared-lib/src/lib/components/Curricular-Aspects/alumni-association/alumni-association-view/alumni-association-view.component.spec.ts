import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAssociationViewComponent } from './alumni-association-view.component';

describe('AlumniAssociationViewComponent', () => {
  let component: AlumniAssociationViewComponent;
  let fixture: ComponentFixture<AlumniAssociationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAssociationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniAssociationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
