import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationLibraryAddComponent } from './automation-library-add.component';

describe('AutomationLibraryAddComponent', () => {
  let component: AutomationLibraryAddComponent;
  let fixture: ComponentFixture<AutomationLibraryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationLibraryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationLibraryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
