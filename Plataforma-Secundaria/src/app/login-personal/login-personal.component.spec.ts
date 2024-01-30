import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPersonalComponent } from './login-personal.component';

describe('LoginPersonalComponent', () => {
  let component: LoginPersonalComponent;
  let fixture: ComponentFixture<LoginPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPersonalComponent]
    });
    fixture = TestBed.createComponent(LoginPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
