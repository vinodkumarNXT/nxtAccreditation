import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionActivityViewComponent } from './extension-activity-view.component';

describe('ExtensionActivityViewComponent', () => {
  let component: ExtensionActivityViewComponent;
  let fixture: ComponentFixture<ExtensionActivityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionActivityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionActivityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
