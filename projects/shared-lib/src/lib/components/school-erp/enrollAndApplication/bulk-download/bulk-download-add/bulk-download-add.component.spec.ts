import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDownloadAddComponent } from './bulk-download-add.component';

describe('BulkDownloadAddComponent', () => {
  let component: BulkDownloadAddComponent;
  let fixture: ComponentFixture<BulkDownloadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkDownloadAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkDownloadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
