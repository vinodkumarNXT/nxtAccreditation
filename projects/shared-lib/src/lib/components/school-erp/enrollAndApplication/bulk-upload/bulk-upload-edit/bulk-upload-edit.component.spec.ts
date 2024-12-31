import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadEditComponent } from './bulk-upload-edit.component';

describe('BulkUploadEditComponent', () => {
  let component: BulkUploadEditComponent;
  let fixture: ComponentFixture<BulkUploadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkUploadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
