import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionEditComponent } from './recognition-edit.component';

describe('RecognitionEditComponent', () => {
  let component: RecognitionEditComponent;
  let fixture: ComponentFixture<RecognitionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognitionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecognitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
