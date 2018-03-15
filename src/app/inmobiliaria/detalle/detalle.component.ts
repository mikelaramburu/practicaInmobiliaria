import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';
import { CasasService } from '../../providers/casas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  @Input('casa') casa: Casa;

  constructor(public casaService: CasasService) {
    console.log('DetalleComponent constructor');

  }
  ngOnInit() {
    console.log('DetalleComponent ngOnInit');

  }

}
