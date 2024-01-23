import { Component, OnInit } from '@angular/core';
import { ApiretailService } from 'src/app/services/apiretail.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: 'movimiento.page.html',
  styleUrls: ['movimiento.page.scss'],
})
export class MovimientoPage implements OnInit {
  movimientos: any[] = [];
  tipoMovimiento: string = '';
  valorMovimiento: number = 0;
  saldoActual: number = 0;

  constructor(private service: ApiretailService) {}

  ngOnInit() {
    this.getMovimientos();
    this.actualizarSaldoActual();
  }

  getMovimientos() {
    this.service.getMovimientos()
      .subscribe((response: any) => {
        this.movimientos = response.body;
        this.actualizarSaldoActual();
      });
  }

  registrarMovimiento(tipoMovimiento: string) {
    this.valorMovimiento = tipoMovimiento === 'Abono' ? this.valorMovimiento : -this.valorMovimiento;

    this.service.postMovimiento(tipoMovimiento, this.valorMovimiento)
      .subscribe((response: any) => {
        console.log(response);
        this.getMovimientos();
        this.valorMovimiento = 0;
        this.tipoMovimiento = '';
        this.actualizarSaldoActual();
      });
  }

  actualizarSaldoActual() {
    this.saldoActual = this.movimientos.reduce((total, movimiento) => {
      const valorMovimiento = Number(movimiento.valorMovimiento);
      return total + (isNaN(valorMovimiento) ? 0 : valorMovimiento);
    }, 0);
  }

  getColor(valorMovimiento: number): string {
    return valorMovimiento >= 0 ? 'green' : 'red';
  }
}