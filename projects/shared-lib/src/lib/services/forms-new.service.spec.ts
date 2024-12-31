import { TestBed } from '@angular/core/testing';

import { FormsNewService } from './forms-new.service';

describe('FormsNewService', () => {
  let service: FormsNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
