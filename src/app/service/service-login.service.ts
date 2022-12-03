import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarClientes } from '../models/salvar-cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  set(clientes: CriarClientes) {
    throw new Error('Method not implemented.');
  }

  listaCliente: any

  private listaClientes!: CriarClientes[];
  private url = 'https://servidorcarros.glitch.me/usuarios';

  constructor(private httpClient: HttpClient) {
    this.listaCliente = [];
  }

  lerClientes(): Observable<CriarClientes[]> {
    return this.httpClient.get<CriarClientes[]>(this.url);
  }
}
