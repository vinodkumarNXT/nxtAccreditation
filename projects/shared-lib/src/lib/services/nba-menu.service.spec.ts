import { TestBed } from '@angular/core/testing';

import { NbaMenuService } from './nba-menu.service';

describe('NbaMenuService', () => {
  let service: NbaMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
