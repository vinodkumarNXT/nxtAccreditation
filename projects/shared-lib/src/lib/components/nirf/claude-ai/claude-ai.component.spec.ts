import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaudeAiComponent } from './claude-ai.component';

describe('ClaudeAiComponent', () => {
  let component: ClaudeAiComponent;
  let fixture: ComponentFixture<ClaudeAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaudeAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaudeAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
