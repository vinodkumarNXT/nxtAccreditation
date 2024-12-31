import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfConductViewComponent } from './code-of-conduct-view.component';

describe('CodeOfConductViewComponent', () => {
  let component: CodeOfConductViewComponent;
  let fixture: ComponentFixture<CodeOfConductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOfConductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeOfConductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
