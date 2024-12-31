import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayThoughtEditComponent } from './today-thought-edit.component';

describe('TodayThoughtEditComponent', () => {
  let component: TodayThoughtEditComponent;
  let fixture: ComponentFixture<TodayThoughtEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayThoughtEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayThoughtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
