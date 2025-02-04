import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantsComponent } from './compliants.component';

describe('CompliantsComponent', () => {
  let component: CompliantsComponent;
  let fixture: ComponentFixture<CompliantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompliantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
