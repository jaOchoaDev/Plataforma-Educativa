import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlumnosComponent } from './login-alumnos.component';

describe('LoginAlumnosComponent', () => {
  let component: LoginAlumnosComponent;
  let fixture: ComponentFixture<LoginAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAlumnosComponent]
    });
    fixture = TestBed.createComponent(LoginAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
