import { Component, OnInit } from '@angular/core';
import { CasasService } from '../providers/casas.service';
import { Casa } from '../model/casa';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
  
  casas:Casa[]; //Inicializamos el array que recogera los elementos de la BD


  constructor(public casasService:CasasService) {
    console.log('InmobiliariaComponent constructor');
    this.casas = [];
   }

  ngOnInit() {
    console.log('InmobiliariaComponent ngOnInit');
    this.cargarCasas();
  }

  cargarCasas(){
    console.log('InmobiliariaComponent cargarCasas');
    this.casas = [];
    this.casasService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  mapeo( result : any ){

    let casa:Casa;
    
    result.forEach(el => {
      casa = new Casa( el.nombre, el.precio);
      casa.nombre= el.nombre;
      casa.precio = el.precio;
      casa.alquiler=el.alquiler;
      casa.foto=el.foto;
      casa.direccion = el.direccion;

      this.casas.push(casa);
    });

  }

}
