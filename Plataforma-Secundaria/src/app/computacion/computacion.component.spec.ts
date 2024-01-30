import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputacionComponent } from './computacion.component';

describe('ComputacionComponent', () => {
  let component: ComputacionComponent;
  let fixture: ComponentFixture<ComputacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputacionComponent]
    });
    fixture = TestBed.createComponent(ComputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
