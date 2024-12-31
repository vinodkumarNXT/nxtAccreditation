import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationLibraryViewComponent } from './automation-library-view.component';

describe('AutomationLibraryViewComponent', () => {
  let component: AutomationLibraryViewComponent;
  let fixture: ComponentFixture<AutomationLibraryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationLibraryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationLibraryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
