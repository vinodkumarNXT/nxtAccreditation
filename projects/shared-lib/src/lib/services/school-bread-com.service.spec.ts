import { TestBed } from '@angular/core/testing';

import { SchoolBreadComService } from './school-bread-com.service';

describe('SchoolBreadComService', () => {
  let service: SchoolBreadComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolBreadComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
