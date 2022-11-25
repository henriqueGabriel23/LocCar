import { TestBed } from '@angular/core/testing';

import { LOcadoraService } from './l-ocadora.service';

describe('LOcadoraService', () => {
  let service: LOcadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LOcadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
