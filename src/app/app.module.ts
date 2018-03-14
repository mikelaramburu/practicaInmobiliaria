import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Service
import { CasasService } from './providers/casas.service';

//pipes
import { CasasPipe } from './pipes/casas.pipe';

//Componentes
import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { DetalleComponent } from './inmobiliaria/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    InmobiliariaComponent,
    DetalleComponent,
    CasasPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],

  providers: [CasasService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
