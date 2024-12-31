import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadAddComponent } from './bulk-upload-add.component';

describe('BulkUploadAddComponent', () => {
  let component: BulkUploadAddComponent;
  let fixture: ComponentFixture<BulkUploadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkUploadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
