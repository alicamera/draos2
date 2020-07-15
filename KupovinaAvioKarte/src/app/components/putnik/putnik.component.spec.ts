import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnikComponent } from './putnik.component';

describe('PutnikComponent', () => {
  let component: PutnikComponent;
  let fixture: ComponentFixture<PutnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
