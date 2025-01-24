import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "../components/navbar/navbar.component"
@NgModule({
  imports: [
    CommonModule,
    NavbarComponent
    // HttpClientModule
  ],
  exports: [
    CommonModule,
    NavbarComponent
    // HttpClientModule
  ]
})
export class SharedModule { }
