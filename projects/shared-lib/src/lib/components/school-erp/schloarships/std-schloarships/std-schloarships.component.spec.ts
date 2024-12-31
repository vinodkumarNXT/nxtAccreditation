import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSchloarshipsComponent } from './std-schloarships.component';

describe('StdSchloarshipsComponent', () => {
  let component: StdSchloarshipsComponent;
  let fixture: ComponentFixture<StdSchloarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdSchloarshipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdSchloarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
