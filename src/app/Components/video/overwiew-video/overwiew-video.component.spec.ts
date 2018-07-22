import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwiewVideoComponent } from './overwiew-video.component';

describe('OverwiewVideoComponent', () => {
  let component: OverwiewVideoComponent;
  let fixture: ComponentFixture<OverwiewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwiewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwiewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
