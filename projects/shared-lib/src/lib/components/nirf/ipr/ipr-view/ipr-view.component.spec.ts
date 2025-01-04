import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IprViewComponent } from './ipr-view.component';

describe('IprViewComponent', () => {
  let component: IprViewComponent;
  let fixture: ComponentFixture<IprViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IprViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IprViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
