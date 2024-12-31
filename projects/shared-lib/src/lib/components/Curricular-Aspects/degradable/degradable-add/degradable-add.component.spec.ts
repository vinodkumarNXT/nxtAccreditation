import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegradableAddComponent } from './degradable-add.component';

describe('DegradableAddComponent', () => {
  let component: DegradableAddComponent;
  let fixture: ComponentFixture<DegradableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegradableAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegradableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
