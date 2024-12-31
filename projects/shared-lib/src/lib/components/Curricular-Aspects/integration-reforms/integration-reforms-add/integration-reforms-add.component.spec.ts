import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationReformsAddComponent } from './integration-reforms-add.component';

describe('IntegrationReformsAddComponent', () => {
  let component: IntegrationReformsAddComponent;
  let fixture: ComponentFixture<IntegrationReformsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationReformsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegrationReformsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
