import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsReceivedEditComponent } from './awards-received-edit.component';

describe('AwardsReceivedEditComponent', () => {
  let component: AwardsReceivedEditComponent;
  let fixture: ComponentFixture<AwardsReceivedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsReceivedEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsReceivedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
