import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'casasPipe'
})
export class CasasPipe implements PipeTransform {

  casasFiltro: Casa[];

  transform(casas: Casa[], searchtext: string, alquiler: boolean, venta: boolean, min: number, max: number): Casa[] {

    this.casasFiltro = [];

    this.casasFiltro = [];


    if (alquiler && !venta) {
      casas.forEach((c) => {
        if (c.alquiler) {
          this.casasFiltro.push(c);
        }
      });
    } else if (venta && !alquiler) {
      casas.forEach((c) => {
        if (!c.alquiler) {
          this.casasFiltro.push(c);
        }
      });
    } else {
      this.casasFiltro = casas;
    }

    if (!searchtext) {
      return this.casasFiltro;
    } else {
      searchtext = searchtext.toLowerCase();
      let casa = '';
      return this.casasFiltro.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchtext);
      });
    }

  }
}