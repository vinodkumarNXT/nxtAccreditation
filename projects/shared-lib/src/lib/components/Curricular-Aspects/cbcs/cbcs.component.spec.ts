/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CbcsComponent } from './cbcs.component';

describe('CbcsComponent', () => {
  let component: CbcsComponent;
  let fixture: ComponentFixture<CbcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
