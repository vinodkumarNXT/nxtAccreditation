import { TestBed } from '@angular/core/testing';

import { GlobalApiEndpointService } from './global-api-endpoint.service';

describe('GlobalApiEndpointService', () => {
  let service: GlobalApiEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalApiEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
