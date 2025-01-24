import { TestBed } from '@angular/core/testing';

import { NirfMenuService } from './nirf-menu.service';

describe('NirfMenuService', () => {
  let service: NirfMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NirfMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
