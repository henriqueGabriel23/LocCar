// lucas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url: string = ''
  constructor(private httpClient: HttpClient) { }
  PegarLocadoras(): Observable<any> {
  return  this.httpClient.get(this.url)
  }
  CadastarLocadoras(dados:any): Observable<any>{
    return this.httpClient.post(this.url,dados)
  }
  DeletarLocadoras(id : number):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}