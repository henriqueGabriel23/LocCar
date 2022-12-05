// lucas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reserva_cliente } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  listaReserva!:Reserva_cliente[];
    url: string = 'https://servidorcarros.glitch.me/reservas'
  constructor(private httpClient: HttpClient) {
    this.listaReserva=[]
   }
  PegarReserva(): Observable<Reserva_cliente[]> {
  return this.httpClient.get<Reserva_cliente[]>(this.url)
  }
  CadastarReserva(dados:Reserva_cliente[]): Observable<Reserva_cliente[]>{
    return this.httpClient.post<Reserva_cliente[]>(this.url , dados)
  }
  DeletarReserva(id : number):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`)
   }
}