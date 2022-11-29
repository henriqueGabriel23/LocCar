import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarCarros } from '../models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private listaCarros!:CriarCarros[]

  private url = 'https://servidorcarros.glitch.me//carros?_expand=tipoCarro'
  private urlCarro = 'https://servidorcarros.glitch.me/carros'
  private urlTipo = 'https://servidorcarros.glitch.me/tipoCarros'
  private urlLocadora = "https://servidorcarros.glitch.me/locadoras"
  constructor(private httpClient:HttpClient) {
    this.listaCarros = [];
   }
   lerCarros():Observable<CriarCarros[]>{
    return this.httpClient.get<CriarCarros[]>(this.url)
   }
   lerTipoCarros():Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlTipo)
   }
   lerLocadora():Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlLocadora)
   }
   salvarCarro(carro:CriarCarros):Observable<CriarCarros[]>{
    return this.httpClient.post<CriarCarros[]>(this.url, carro);
   }
   deletarCarro(carroId : number):Observable<any>{
    return this.httpClient.delete(`${this.urlCarro}/${carroId}`)
  }
  editarUsuario(carro:CriarCarros):Observable<CriarCarros[]>{
    return this.httpClient.put<CriarCarros[]>(`${this.urlCarro}/${carro.id}`,carro);
  }
   
   
}