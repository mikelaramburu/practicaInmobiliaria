import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = `http://localhost:3000`;

@Injectable()
export class CasasService {

  constructor(public http: HttpClient) {
    console.log('CasasService constructor');
  }

  getCasas(): Observable<any> {
    let url = END_POINT + '/casas';
    console.log(`CasasService getTodos ${url}`);
    return this.http.get(url);
  }

  getCasa(id: number): Observable<any> {
    let url = END_POINT + '/casas/' + id;
    return this.http.get(url);
  }

}

