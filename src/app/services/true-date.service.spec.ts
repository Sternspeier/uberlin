import { TestBed } from '@angular/core/testing';

import { TrueDateService } from './true-date.service';

describe('TrueDateService', () => {
  let service: TrueDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrueDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
