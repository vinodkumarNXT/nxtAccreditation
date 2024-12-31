import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSchloarshipEditComponent } from './std-schloarship-edit.component';

describe('StdSchloarshipEditComponent', () => {
  let component: StdSchloarshipEditComponent;
  let fixture: ComponentFixture<StdSchloarshipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdSchloarshipEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdSchloarshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
