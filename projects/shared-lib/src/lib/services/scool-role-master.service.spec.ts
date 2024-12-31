import { TestBed } from '@angular/core/testing';

import { ScoolRoleMasterService } from './scool-role-master.service';

describe('ScoolRoleMasterService', () => {
  let service: ScoolRoleMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoolRoleMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
