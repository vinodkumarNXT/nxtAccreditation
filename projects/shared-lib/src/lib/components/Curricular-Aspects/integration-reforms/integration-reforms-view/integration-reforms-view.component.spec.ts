import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationReformsViewComponent } from './integration-reforms-view.component';

describe('IntegrationReformsViewComponent', () => {
  let component: IntegrationReformsViewComponent;
  let fixture: ComponentFixture<IntegrationReformsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationReformsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegrationReformsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
