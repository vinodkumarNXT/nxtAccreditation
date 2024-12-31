import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSchloarshipAddComponent } from './std-schloarship-add.component';

describe('StdSchloarshipAddComponent', () => {
  let component: StdSchloarshipAddComponent;
  let fixture: ComponentFixture<StdSchloarshipAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdSchloarshipAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdSchloarshipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
