import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationReformsEditComponent } from './integration-reforms-edit.component';

describe('IntegrationReformsEditComponent', () => {
  let component: IntegrationReformsEditComponent;
  let fixture: ComponentFixture<IntegrationReformsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationReformsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegrationReformsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
