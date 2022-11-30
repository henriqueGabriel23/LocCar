import { TestBed } from '@angular/core/testing';

import { CarrosClienteService } from './carros-cliente.service';

describe('CarrosClienteService', () => {
  let service: CarrosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
