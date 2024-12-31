import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizationsReceivedComponent } from './recognizations-received.component';

describe('RecognizationsReceivedComponent', () => {
  let component: RecognizationsReceivedComponent;
  let fixture: ComponentFixture<RecognizationsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognizationsReceivedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognizationsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
