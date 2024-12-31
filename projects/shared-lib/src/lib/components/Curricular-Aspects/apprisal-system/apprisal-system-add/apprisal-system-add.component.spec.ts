import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprisalSystemAddComponent } from './apprisal-system-add.component';

describe('ApprisalSystemAddComponent', () => {
  let component: ApprisalSystemAddComponent;
  let fixture: ComponentFixture<ApprisalSystemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprisalSystemAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprisalSystemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
