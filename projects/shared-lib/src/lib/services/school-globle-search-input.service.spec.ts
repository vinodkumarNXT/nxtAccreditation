import { TestBed } from '@angular/core/testing';

import { SchoolGlobleSearchInputService } from './school-globle-search-input.service';

describe('SchoolGlobleSearchInputService', () => {
  let service: SchoolGlobleSearchInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolGlobleSearchInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
