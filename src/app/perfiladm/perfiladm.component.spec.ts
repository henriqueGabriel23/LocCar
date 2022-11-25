import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiladmComponent } from './perfiladm.component';

describe('PerfiladmComponent', () => {
  let component: PerfiladmComponent;
  let fixture: ComponentFixture<PerfiladmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfiladmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfiladmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
