import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizationsReceivedEditComponent } from './recognizations-received-edit.component';

describe('RecognizationsReceivedEditComponent', () => {
  let component: RecognizationsReceivedEditComponent;
  let fixture: ComponentFixture<RecognizationsReceivedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognizationsReceivedEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognizationsReceivedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
