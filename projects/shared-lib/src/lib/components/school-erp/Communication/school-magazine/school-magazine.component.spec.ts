import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMagazineComponent } from './school-magazine.component';

describe('SchoolMagazineComponent', () => {
  let component: SchoolMagazineComponent;
  let fixture: ComponentFixture<SchoolMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolMagazineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
