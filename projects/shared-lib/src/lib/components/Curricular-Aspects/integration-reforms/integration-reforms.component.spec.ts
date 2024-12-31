import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationReformsComponent } from './integration-reforms.component';

describe('IntegrationReformsComponent', () => {
  let component: IntegrationReformsComponent;
  let fixture: ComponentFixture<IntegrationReformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationReformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegrationReformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
