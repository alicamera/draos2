import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarticaPonudaComponent } from './kartica-ponuda.component';

describe('KarticaPonudaComponent', () => {
  let component: KarticaPonudaComponent;
  let fixture: ComponentFixture<KarticaPonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarticaPonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarticaPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
