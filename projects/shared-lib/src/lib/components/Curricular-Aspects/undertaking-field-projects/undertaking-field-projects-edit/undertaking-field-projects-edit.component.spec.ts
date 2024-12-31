import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingFieldProjectsEditComponent } from './undertaking-field-projects-edit.component';

describe('UndertakingFieldProjectsEditComponent', () => {
  let component: UndertakingFieldProjectsEditComponent;
  let fixture: ComponentFixture<UndertakingFieldProjectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingFieldProjectsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndertakingFieldProjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
