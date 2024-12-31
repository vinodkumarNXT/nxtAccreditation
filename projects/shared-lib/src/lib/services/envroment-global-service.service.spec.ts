import { TestBed } from '@angular/core/testing';

import { EnvromentGlobalServiceService } from './envroment-global-service.service';

describe('EnvromentGlobalServiceService', () => {
  let service: EnvromentGlobalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvromentGlobalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
