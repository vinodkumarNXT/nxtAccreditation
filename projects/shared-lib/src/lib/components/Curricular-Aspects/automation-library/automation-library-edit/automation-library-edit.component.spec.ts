import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationLibraryEditComponent } from './automation-library-edit.component';

describe('AutomationLibraryEditComponent', () => {
  let component: AutomationLibraryEditComponent;
  let fixture: ComponentFixture<AutomationLibraryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationLibraryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationLibraryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
