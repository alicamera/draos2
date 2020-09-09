import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisPonudaComponent } from './servis-ponuda.component';

describe('ServisPonudaComponent', () => {
  let component: ServisPonudaComponent;
  let fixture: ComponentFixture<ServisPonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisPonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
