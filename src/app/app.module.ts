import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CasasService } from './providers/casas.service';
import {  HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { DetalleComponent } from './inmobiliaria/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    InmobiliariaComponent,
    DetalleComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    
  ],
  providers: [
 
    HttpClient,          
    CasasService
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
