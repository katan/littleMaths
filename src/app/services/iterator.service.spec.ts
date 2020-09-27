import { TestBed } from '@angular/core/testing';

import { IteratorService } from './iterator.service';

describe('IteratorService', () => {
  let service: IteratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IteratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
