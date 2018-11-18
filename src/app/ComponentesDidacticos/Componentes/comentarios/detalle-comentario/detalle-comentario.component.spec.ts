import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComentarioComponent } from './detalle-comentario.component';

describe('DetalleComentarioComponent', () => {
  let component: DetalleComentarioComponent;
  let fixture: ComponentFixture<DetalleComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
