import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfConductAddComponent } from './code-of-conduct-add.component';

describe('CodeOfConductAddComponent', () => {
  let component: CodeOfConductAddComponent;
  let fixture: ComponentFixture<CodeOfConductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOfConductAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeOfConductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
