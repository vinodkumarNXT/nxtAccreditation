import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayThoughtAddComponent } from './today-thought-add.component';

describe('TodayThoughtAddComponent', () => {
  let component: TodayThoughtAddComponent;
  let fixture: ComponentFixture<TodayThoughtAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayThoughtAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayThoughtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
