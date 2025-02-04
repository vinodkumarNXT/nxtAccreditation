import { TestBed } from '@angular/core/testing';

import { TablegridService } from './tablegrid.service';

describe('TablegridService', () => {
  let service: TablegridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablegridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
