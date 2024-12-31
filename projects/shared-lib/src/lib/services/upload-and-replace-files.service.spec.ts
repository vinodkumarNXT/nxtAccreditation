import { TestBed } from '@angular/core/testing';

import { UploadAndReplaceFilesService } from './upload-and-replace-files.service';

describe('UploadAndReplaceFilesService', () => {
  let service: UploadAndReplaceFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadAndReplaceFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
