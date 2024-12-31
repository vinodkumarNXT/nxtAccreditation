import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCampusAddComponent } from './green-campus-add.component';

describe('GreenCampusAddComponent', () => {
  let component: GreenCampusAddComponent;
  let fixture: ComponentFixture<GreenCampusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenCampusAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenCampusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
