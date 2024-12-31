import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDownloadEditComponent } from './bulk-download-edit.component';

describe('BulkDownloadEditComponent', () => {
  let component: BulkDownloadEditComponent;
  let fixture: ComponentFixture<BulkDownloadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkDownloadEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkDownloadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
