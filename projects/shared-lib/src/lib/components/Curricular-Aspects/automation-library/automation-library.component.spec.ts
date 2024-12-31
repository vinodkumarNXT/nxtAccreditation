import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationLibraryComponent } from './automation-library.component';

describe('AutomationLibraryComponent', () => {
  let component: AutomationLibraryComponent;
  let fixture: ComponentFixture<AutomationLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
