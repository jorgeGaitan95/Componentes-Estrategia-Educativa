import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTemarioComponent } from './item-temario.component';

describe('ItemTemarioComponent', () => {
  let component: ItemTemarioComponent;
  let fixture: ComponentFixture<ItemTemarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTemarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
