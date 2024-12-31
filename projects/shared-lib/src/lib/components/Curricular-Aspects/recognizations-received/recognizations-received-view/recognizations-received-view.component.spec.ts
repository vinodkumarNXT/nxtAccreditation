import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizationsReceivedViewComponent } from './recognizations-received-view.component';

describe('RecognizationsReceivedViewComponent', () => {
  let component: RecognizationsReceivedViewComponent;
  let fixture: ComponentFixture<RecognizationsReceivedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognizationsReceivedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognizationsReceivedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
