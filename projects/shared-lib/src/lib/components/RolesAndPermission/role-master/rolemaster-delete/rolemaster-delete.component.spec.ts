import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemasterDeleteComponent } from './rolemaster-delete.component';

describe('RolemasterDeleteComponent', () => {
  let component: RolemasterDeleteComponent;
  let fixture: ComponentFixture<RolemasterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolemasterDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolemasterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
