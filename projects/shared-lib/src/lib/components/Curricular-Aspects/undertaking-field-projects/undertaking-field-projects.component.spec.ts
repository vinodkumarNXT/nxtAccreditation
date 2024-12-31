import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingFieldProjectsComponent } from './undertaking-field-projects.component';

describe('UndertakingFieldProjectsComponent', () => {
  let component: UndertakingFieldProjectsComponent;
  let fixture: ComponentFixture<UndertakingFieldProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingFieldProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndertakingFieldProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
