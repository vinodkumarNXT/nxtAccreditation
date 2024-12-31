import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingFieldProjectsViewComponent } from './undertaking-field-projects-view.component';

describe('UndertakingFieldProjectsViewComponent', () => {
  let component: UndertakingFieldProjectsViewComponent;
  let fixture: ComponentFixture<UndertakingFieldProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingFieldProjectsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndertakingFieldProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
