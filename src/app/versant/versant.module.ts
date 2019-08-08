import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersantRoutingModule } from './versant-routing.module';
import { VersantComponent } from './versant.component';

@NgModule({
  imports: [
    CommonModule,
    VersantRoutingModule
  ],
  declarations: [VersantComponent]
})
export class VersantModule { }
