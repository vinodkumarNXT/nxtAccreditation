import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundAddComponent } from './ground-add.component';

describe('GroundAddComponent', () => {
  let component: GroundAddComponent;
  let fixture: ComponentFixture<GroundAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroundAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroundAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
