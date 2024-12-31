import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionActivityEditComponent } from './extension-activity-edit.component';

describe('ExtensionActivityEditComponent', () => {
  let component: ExtensionActivityEditComponent;
  let fixture: ComponentFixture<ExtensionActivityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionActivityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionActivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
