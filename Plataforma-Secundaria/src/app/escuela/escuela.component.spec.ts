import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaComponent } from './escuela.component';

describe('EscuelaComponent', () => {
  let component: EscuelaComponent;
  let fixture: ComponentFixture<EscuelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscuelaComponent]
    });
    fixture = TestBed.createComponent(EscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
