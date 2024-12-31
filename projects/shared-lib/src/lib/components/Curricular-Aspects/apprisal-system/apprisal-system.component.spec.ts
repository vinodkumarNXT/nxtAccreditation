import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprisalSystemComponent } from './apprisal-system.component';

describe('ApprisalSystemComponent', () => {
  let component: ApprisalSystemComponent;
  let fixture: ComponentFixture<ApprisalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprisalSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprisalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
