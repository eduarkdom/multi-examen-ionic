import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MovimientoPage } from './movimiento.page';

describe('MovimientoPage', () => {
  let component: MovimientoPage;
  let fixture: ComponentFixture<MovimientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
