import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolRetroComponent } from './pol-retro.component';

describe('PolRetroComponent', () => {
  let component: PolRetroComponent;
  let fixture: ComponentFixture<PolRetroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolRetroComponent]
    });
    fixture = TestBed.createComponent(PolRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
