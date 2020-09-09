import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPonudaComponent } from './lista-ponuda.component';

describe('ListaPonudaComponent', () => {
  let component: ListaPonudaComponent;
  let fixture: ComponentFixture<ListaPonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
