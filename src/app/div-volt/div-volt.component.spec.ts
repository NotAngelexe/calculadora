import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivVoltComponent } from './div-volt.component';

describe('DivVoltComponent', () => {
  let component: DivVoltComponent;
  let fixture: ComponentFixture<DivVoltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivVoltComponent]
    });
    fixture = TestBed.createComponent(DivVoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
