import { TestBed } from '@angular/core/testing';

import { AiContentGenaratorService } from './ai-content-genarator.service';

describe('AiContentGenaratorService', () => {
  let service: AiContentGenaratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiContentGenaratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
