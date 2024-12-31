import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayThoughtViewComponent } from './today-thought-view.component';

describe('TodayThoughtViewComponent', () => {
  let component: TodayThoughtViewComponent;
  let fixture: ComponentFixture<TodayThoughtViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayThoughtViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayThoughtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
