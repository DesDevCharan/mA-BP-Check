import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavHeaderComponent,
    NavFooterComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
