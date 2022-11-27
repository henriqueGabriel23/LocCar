import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // guardando a rota da url
  url: string = 'http://localhost:3000/usuario'

  // fazendo a interação com a API
  constructor(private httpClient: HttpClient) { }

  // criando o metado de pegar dados do cliente
  getUsuarios(): Observable<any>{ //Observable monitora o que acontece com o metado, oque acontece depois, durante, caso de erro 
    // acessando a API
    return this.httpClient.get(this.url);
  }

  
}
