import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteConfeccionComponent } from './corte-confeccion.component';

describe('CorteConfeccionComponent', () => {
  let component: CorteConfeccionComponent;
  let fixture: ComponentFixture<CorteConfeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorteConfeccionComponent]
    });
    fixture = TestBed.createComponent(CorteConfeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
