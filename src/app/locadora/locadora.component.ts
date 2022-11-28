import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LOcadoraService } from '../services/l-ocadora.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.scss']
})
export class LocadoraComponent {

  // guarda os dados  
  listaLocadoras: any;
  elementoID!: number
  form!: FormGroup;
  Cadastro: boolean = true;

  // injeçao de items de fora
  constructor(private servicolocadora: LOcadoraService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //  carrega ao iniciar o cite
    this.form = this.fb.group({
      nome: '',
      endereco: '',
      telefone: ''
    })

    this.ListarLocadoras()
  }


  ListarLocadoras() {
    this.servicolocadora.PegarLocadoras().subscribe({
      next: (dados: any) => {
        this.listaLocadoras = dados;
        console.log(this.listaLocadoras);
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }

  CadastrarLocadora() {

    let nome = this.form.controls["nome"].value
    let endereco = this.form.controls["endereco"].value
    let telefone = this.form.controls["telefone"].value

    let dados = {
      id: this.listaLocadoras[(this.listaLocadoras.length) - 1].id + 1,
      nome: nome,
      endereco: endereco,
      telefone: telefone
    }

    this.servicolocadora.CadastarLocadoras(dados).subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.ListarLocadoras()
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }

  DeletarLocadora(id: number) {
    this.servicolocadora.DeletarLocadoras(id).subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.ListarLocadoras()
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }

  PuxarDadosLocadora(dados: any) {
    this.elementoID = dados.id;
    this.form.controls["nome"].setValue(dados.nome);
    this.form.controls["endereco"].setValue(dados.endereco);
    this.form.controls["telefone"].setValue(dados.telefone);
    this.Cadastro = false;
  }

  EditarLocadoras() {

    let nome = this.form.controls["nome"].value
    let endereco = this.form.controls["endereco"].value
    let telefone = this.form.controls["telefone"].value

    let dados = {
      id: this.elementoID,
      nome: nome,
      endereco: endereco,
      telefone: telefone
    }

    this.servicolocadora.EditarLocadoras(dados).subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.ListarLocadoras()
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })

  }

}
