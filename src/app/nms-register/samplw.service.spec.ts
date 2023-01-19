import { TestBed } from '@angular/core/testing';

import { SamplwService } from './samplw.service';

describe('SamplwService', () => {
  let service: SamplwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
