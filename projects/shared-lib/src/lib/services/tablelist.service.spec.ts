import { TestBed } from '@angular/core/testing';

import { TablelistService } from './tablelist.service';

describe('TablelistService', () => {
  let service: TablelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
