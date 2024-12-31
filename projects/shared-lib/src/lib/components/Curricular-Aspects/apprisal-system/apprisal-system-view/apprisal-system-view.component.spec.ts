import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprisalSystemViewComponent } from './apprisal-system-view.component';

describe('ApprisalSystemViewComponent', () => {
  let component: ApprisalSystemViewComponent;
  let fixture: ComponentFixture<ApprisalSystemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprisalSystemViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprisalSystemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
