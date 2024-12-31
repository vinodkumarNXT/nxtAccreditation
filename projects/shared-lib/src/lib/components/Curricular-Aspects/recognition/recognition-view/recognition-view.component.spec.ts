import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionViewComponent } from './recognition-view.component';

describe('RecognitionViewComponent', () => {
  let component: RecognitionViewComponent;
  let fixture: ComponentFixture<RecognitionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognitionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
