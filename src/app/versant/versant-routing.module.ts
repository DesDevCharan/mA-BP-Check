import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersantComponent } from './versant.component';

const routes: Routes = [
  { path: '', component: VersantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersantRoutingModule { }
