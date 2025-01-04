import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IprAddComponent } from './ipr-add.component';

describe('IprAddComponent', () => {
  let component: IprAddComponent;
  let fixture: ComponentFixture<IprAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IprAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IprAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
