import { TestBed } from '@angular/core/testing';

import { BuildLinksService } from './build-links.service';

describe('BuildLinksService', () => {
  let service: BuildLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
