import { TestBed } from '@angular/core/testing';

import { TuAuthenService } from './tu-authen.service';

describe('TuAuthenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuAuthenService = TestBed.get(TuAuthenService);
    expect(service).toBeTruthy();
  });
});
