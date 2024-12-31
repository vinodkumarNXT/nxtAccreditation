import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityDevelopmentAddComponent } from './capacity-development-add.component';

describe('CapacityDevelopmentAddComponent', () => {
  let component: CapacityDevelopmentAddComponent;
  let fixture: ComponentFixture<CapacityDevelopmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacityDevelopmentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapacityDevelopmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
