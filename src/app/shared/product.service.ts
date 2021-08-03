import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  create(product: any) {
      return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(map( (res: any) => {
        return {
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      }))
  }
}
