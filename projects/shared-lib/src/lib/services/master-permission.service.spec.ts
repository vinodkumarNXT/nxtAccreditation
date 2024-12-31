import { TestBed } from '@angular/core/testing';

import { MasterPermissionService } from './master-permission.service';

describe('MasterPermissionService', () => {
  let service: MasterPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
