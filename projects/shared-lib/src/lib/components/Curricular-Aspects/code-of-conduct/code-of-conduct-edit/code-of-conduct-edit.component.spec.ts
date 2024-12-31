import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfConductEditComponent } from './code-of-conduct-edit.component';

describe('CodeOfConductEditComponent', () => {
  let component: CodeOfConductEditComponent;
  let fixture: ComponentFixture<CodeOfConductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOfConductEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeOfConductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
