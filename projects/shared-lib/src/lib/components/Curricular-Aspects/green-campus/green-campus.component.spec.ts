import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCampusComponent } from './green-campus.component';

describe('GreenCampusComponent', () => {
  let component: GreenCampusComponent;
  let fixture: ComponentFixture<GreenCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenCampusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
