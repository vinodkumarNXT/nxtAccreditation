import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionplanComponent } from './lessionplan.component';

describe('LessionplanComponent', () => {
  let component: LessionplanComponent;
  let fixture: ComponentFixture<LessionplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessionplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
