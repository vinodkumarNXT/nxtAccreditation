import { TestBed } from '@angular/core/testing';

import { IprService } from './ipr.service';

describe('IprService', () => {
  let service: IprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
