import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimientoPageRoutingModule } from './movimiento-routing.module';

import { MovimientoPage } from './movimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimientoPageRoutingModule
  ],
  providers: [
    CurrencyPipe,
  ],
  declarations: [MovimientoPage]
})
export class MovimientoPageModule {}
