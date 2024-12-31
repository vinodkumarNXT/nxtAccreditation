import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsAddComponent } from './citations-add.component';

describe('CitationsAddComponent', () => {
  let component: CitationsAddComponent;
  let fixture: ComponentFixture<CitationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
