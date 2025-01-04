import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IprEditComponent } from './ipr-edit.component';

describe('IprEditComponent', () => {
  let component: IprEditComponent;
  let fixture: ComponentFixture<IprEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IprEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IprEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
