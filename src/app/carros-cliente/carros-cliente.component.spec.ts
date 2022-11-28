import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosClienteComponent } from './carros-cliente.component';

describe('CarrosClienteComponent', () => {
  let component: CarrosClienteComponent;
  let fixture: ComponentFixture<CarrosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
