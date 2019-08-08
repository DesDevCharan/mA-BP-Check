import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KingComponent } from './king.component';
const routes: Routes = [
  { path: '', component: KingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KingRoutingModule { }
