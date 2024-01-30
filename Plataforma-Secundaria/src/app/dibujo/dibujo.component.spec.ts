import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujoComponent } from './dibujo.component';

describe('DibujoComponent', () => {
  let component: DibujoComponent;
  let fixture: ComponentFixture<DibujoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DibujoComponent]
    });
    fixture = TestBed.createComponent(DibujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
