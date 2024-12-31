import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayThoughtComponent } from './today-thought.component';

describe('TodayThoughtComponent', () => {
  let component: TodayThoughtComponent;
  let fixture: ComponentFixture<TodayThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayThoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
