import { TestBed } from '@angular/core/testing';

import { ErpMenuService } from './erp-menu.service';

describe('ErpMenuService', () => {
  let service: ErpMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
