import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacDahboardComponent } from './naac-dahboard.component';

describe('NaacDahboardComponent', () => {
  let component: NaacDahboardComponent;
  let fixture: ComponentFixture<NaacDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaacDahboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaacDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
