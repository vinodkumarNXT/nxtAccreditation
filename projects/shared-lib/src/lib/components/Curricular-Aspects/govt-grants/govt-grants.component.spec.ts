import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtGrantsComponent } from './govt-grants.component';

describe('GovtGrantsComponent', () => {
  let component: GovtGrantsComponent;
  let fixture: ComponentFixture<GovtGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
