import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkupnoComponent } from './ukupno.component';

describe('UkupnoComponent', () => {
  let component: UkupnoComponent;
  let fixture: ComponentFixture<UkupnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkupnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkupnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
