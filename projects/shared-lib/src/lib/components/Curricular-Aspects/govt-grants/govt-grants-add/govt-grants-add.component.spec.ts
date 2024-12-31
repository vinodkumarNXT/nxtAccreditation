import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtGrantsAddComponent } from './govt-grants-add.component';

describe('GovtGrantsAddComponent', () => {
  let component: GovtGrantsAddComponent;
  let fixture: ComponentFixture<GovtGrantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtGrantsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtGrantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
