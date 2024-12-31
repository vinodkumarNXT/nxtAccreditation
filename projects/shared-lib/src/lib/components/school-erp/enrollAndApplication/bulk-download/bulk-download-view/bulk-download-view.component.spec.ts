import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDownloadViewComponent } from './bulk-download-view.component';

describe('BulkDownloadViewComponent', () => {
  let component: BulkDownloadViewComponent;
  let fixture: ComponentFixture<BulkDownloadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkDownloadViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkDownloadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
