import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsReceivedAddComponent } from './awards-received-add.component';

describe('AwardsReceivedAddComponent', () => {
  let component: AwardsReceivedAddComponent;
  let fixture: ComponentFixture<AwardsReceivedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsReceivedAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsReceivedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
