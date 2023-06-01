import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolFijaComponent } from './pol-fija.component';

describe('PolFijaComponent', () => {
  let component: PolFijaComponent;
  let fixture: ComponentFixture<PolFijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolFijaComponent]
    });
    fixture = TestBed.createComponent(PolFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
