import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingFieldProjectsAddComponent } from './undertaking-field-projects-add.component';

describe('UndertakingFieldProjectsAddComponent', () => {
  let component: UndertakingFieldProjectsAddComponent;
  let fixture: ComponentFixture<UndertakingFieldProjectsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingFieldProjectsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndertakingFieldProjectsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
