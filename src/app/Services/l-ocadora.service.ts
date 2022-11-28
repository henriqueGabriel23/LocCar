import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LOcadoraService {

  url: string = 'http://localhost:3000/locadoras'

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
  
  EditarLocadoras(dados: any): Observable<any>{
    return this.httpClient.put(`${this.url}/${dados.id}` , dados)

  }




}