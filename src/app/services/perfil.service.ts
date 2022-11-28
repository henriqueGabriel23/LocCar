import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarioModel } from '../models/loccar.model';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  // guardando a rota da url
  url: string = 'http://localhost:3000/usuario'

    // fazendo a interação com a API
  constructor(private httpClient: HttpClient) {}
  // criando o metado de pegar dados do cliente
  getDadosAPI(): Observable<usuarioModel[]>{ //Observable monitora o que acontece com o metado, oque acontece depois, durante, caso de erro 
    // acessando a API
    return this.httpClient.get<usuarioModel[]>(this.url);
  }

  // criando o metado deletar
  excluirADM(indicador: number):Observable<any>{
    return this.httpClient.delete(`${this.url}/${indicador}`)
  }

  // criando o metado para editar
  editarADM(dados: usuarioModel){
    return this.httpClient.put(`${this.url}/${dados.id}`, dados)
  }
}