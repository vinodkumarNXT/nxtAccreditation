import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionActivityAddComponent } from './extension-activity-add.component';

describe('ExtensionActivityAddComponent', () => {
  let component: ExtensionActivityAddComponent;
  let fixture: ComponentFixture<ExtensionActivityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionActivityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionActivityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
