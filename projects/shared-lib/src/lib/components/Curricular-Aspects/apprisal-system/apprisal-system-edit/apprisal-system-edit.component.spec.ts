import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprisalSystemEditComponent } from './apprisal-system-edit.component';

describe('ApprisalSystemEditComponent', () => {
  let component: ApprisalSystemEditComponent;
  let fixture: ComponentFixture<ApprisalSystemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprisalSystemEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprisalSystemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
