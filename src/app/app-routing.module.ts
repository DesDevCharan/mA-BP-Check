import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post',
    loadChildren: '../app/post/post.module#PostModule'
  },
  {
    path: 'king',
    loadChildren: '../app/king/king.module#KingModule'
  },
  {
    path: 'versant',
    loadChildren: '../app/versant/versant.module#VersantModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
