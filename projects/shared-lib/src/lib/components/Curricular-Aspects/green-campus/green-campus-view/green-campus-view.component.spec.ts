import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCampusViewComponent } from './green-campus-view.component';

describe('GreenCampusViewComponent', () => {
  let component: GreenCampusViewComponent;
  let fixture: ComponentFixture<GreenCampusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenCampusViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenCampusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
