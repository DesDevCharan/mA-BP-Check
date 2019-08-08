import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersantComponent } from './versant.component';

describe('VersantComponent', () => {
  let component: VersantComponent;
  let fixture: ComponentFixture<VersantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
