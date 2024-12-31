import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionAddComponent } from './recognition-add.component';

describe('RecognitionAddComponent', () => {
  let component: RecognitionAddComponent;
  let fixture: ComponentFixture<RecognitionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognitionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognitionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
