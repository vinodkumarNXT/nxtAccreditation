import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadViewComponent } from './bulk-upload-view.component';

describe('BulkUploadViewComponent', () => {
  let component: BulkUploadViewComponent;
  let fixture: ComponentFixture<BulkUploadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkUploadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
