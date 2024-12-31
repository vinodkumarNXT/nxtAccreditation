import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionActivityComponent } from './extension-activity.component';

describe('ExtensionActivityComponent', () => {
  let component: ExtensionActivityComponent;
  let fixture: ComponentFixture<ExtensionActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
