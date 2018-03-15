import { Component, OnInit } from '@angular/core';
import { CasasService } from '../providers/casas.service';
import { Casa } from '../model/casa';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})

export class InmobiliariaComponent implements OnInit {

  casas: Casa[];
  casa: Casa;
  alquiler: boolean;
  venta: boolean;
  min: number;
  max: number;
  casaSeleccionada: Casa;
  casasFiltradas: Casa[];


  constructor(private casasService: CasasService) {
    console.log('InmobiliariaComponent constructor');

    this.casas = [];
    this.casa = new Casa;

  }

  ngOnInit() {
    console.log('InmobiliariaComponent ngOnInit');
    this.casasService.getCasas()
      .subscribe(
        data => {
          data.forEach(el => {
            this.casas.push(el);
          });
          this.casa = this.casas[0];
        }
      );
  }

  verCasa(casa) {
    console.log('InmobiliariaComponent verCasa');
    this.casa = casa;
    //console.log('%o', this.casa);
  }
  seleccionarCasa(casa: Casa) {
    console.log('InmobiliriaComponent seleccionarCasa %o', casa);
    this.casaSeleccionada = casa;

  }


}
