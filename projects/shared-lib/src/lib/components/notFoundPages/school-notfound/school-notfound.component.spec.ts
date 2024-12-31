import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNotfoundComponent } from './school-notfound.component';

describe('SchoolNotfoundComponent', () => {
  let component: SchoolNotfoundComponent;
  let fixture: ComponentFixture<SchoolNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
