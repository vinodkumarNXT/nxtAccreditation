import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBodiesAddComponent } from './institutional-bodies-add.component';

describe('InstitutionalBodiesAddComponent', () => {
  let component: InstitutionalBodiesAddComponent;
  let fixture: ComponentFixture<InstitutionalBodiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalBodiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalBodiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
