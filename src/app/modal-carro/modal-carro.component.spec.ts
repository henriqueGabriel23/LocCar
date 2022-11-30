import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarroComponent } from './modal-carro.component';

describe('ModalCarroComponent', () => {
  let component: ModalCarroComponent;
  let fixture: ComponentFixture<ModalCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
