// lucas
import { TestBed } from '@angular/core/testing';
import { ReservaComponent } from '../reserva/reserva.component';

describe('ServiceService', () => {
  let service: ReservaComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
