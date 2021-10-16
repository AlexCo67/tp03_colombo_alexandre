import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit';
import { environment } from './environments/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonservService {
  constructor(private httpClient: HttpClient) {}


  public getCatalogue(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(environment.baseUrl);
  }
}
