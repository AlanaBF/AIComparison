import { TestBed } from '@angular/core/testing';

import { TextSimplificationService } from './text-simplification.service';

describe('TextSimplificationService', () => {
  let service: TextSimplificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSimplificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
