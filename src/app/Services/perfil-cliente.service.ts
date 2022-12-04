import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilCliente } from '../models/perfil-cliente.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PerfilClienteService {
  private listaUsuario!:PerfilCliente[]
  private url = 'https://servidorcarros.glitch.me/usuarios'
  constructor(private httpClient:HttpClient) {
    this.listaUsuario = [];
   }
   lerUsuario(): Observable <PerfilCliente[]>{
    return this.httpClient.get<PerfilCliente[]>(this.url)
   }
}
