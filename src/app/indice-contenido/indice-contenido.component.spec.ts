import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceContenidoComponent } from './indice-contenido.component';

describe('IndiceContenidoComponent', () => {
  let component: IndiceContenidoComponent;
  let fixture: ComponentFixture<IndiceContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
