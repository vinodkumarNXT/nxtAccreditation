import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemasterAddComponent } from './rolemaster-add.component';

describe('RolemasterAddComponent', () => {
  let component: RolemasterAddComponent;
  let fixture: ComponentFixture<RolemasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolemasterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolemasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
