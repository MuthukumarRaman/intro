import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "../components/navbar/navbar.component"
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule
    // HttpClientModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    RouterModule
    // HttpClientModule
  ]
})
export class SharedModule { }
