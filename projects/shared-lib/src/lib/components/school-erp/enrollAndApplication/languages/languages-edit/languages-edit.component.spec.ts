import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesEditComponent } from './languages-edit.component';

describe('LanguagesEditComponent', () => {
  let component: LanguagesEditComponent;
  let fixture: ComponentFixture<LanguagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
