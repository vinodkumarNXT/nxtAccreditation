import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizationsReceivedAddComponent } from './recognizations-received-add.component';

describe('RecognizationsReceivedAddComponent', () => {
  let component: RecognizationsReceivedAddComponent;
  let fixture: ComponentFixture<RecognizationsReceivedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognizationsReceivedAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognizationsReceivedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
