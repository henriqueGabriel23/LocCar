import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuarioModel } from '../models/loccar.model';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfiladm',
  templateUrl: './perfiladm.component.html',
  styleUrls: ['./perfiladm.component.scss']
})
export class PerfiladmComponent {
  // variavel que guarda o que tem nos inputs
  form!: FormGroup
  
  // variavel que guarda a lista de usuarios
  listaUsuarios!: usuarioModel[];

  atualizando: boolean = true

  // pegar id do usuario
  idLength = 0

  salvarSenha!: string
  
  constructor(private servicoperfil:PerfilService, private formbuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nome: "",
      numero: "",
      email: "",
    })

    this.listarUsuario()
  }

  listarUsuario(){
    this.servicoperfil.getDadosAPI().subscribe({
      // o que vai acontecer quando der certo?
      next:(usuarios: usuarioModel[]) =>{
        // guardando os dados na variavel listaUsuarios
        this.listaUsuarios = usuarios
        console.log(this.listaUsuarios);  
      }
    })
  }

  deletarADM(id: number){
    this.servicoperfil.excluirADM(id).subscribe({
      // oque vai acontecer quando der certo?
      next:(usuario: any) => {
      // guardando os dados na variavel listaUsuarios
      console.log(usuario);
      this.listarUsuario()
    },

    // caso de errado
    error:()=>{
      console.log('deu ruim');
    }
    })
  }

  // pegando dados e jogar no input
  pegarDados(dados: usuarioModel){
    this.idLength = dados.id
    this.salvarSenha = dados.senha
    this.form.controls["nome"].setValue(dados.nome)
    this.form.controls["numero"].setValue(dados.numero)
    this.form.controls["email"].setValue(dados.email)
  }

  editarADM(){
    let nomeInput = this.form.controls['nome'].value
    let numeroInput = this.form.controls['numero'].value
    let emailInput = this.form.controls['email'].value

    let dados ={
      id: this.idLength,
      nome: nomeInput,
      numero: numeroInput,
      email: emailInput,
      senha: this.salvarSenha
    }

    this.servicoperfil.editarADM(dados).subscribe({
        // oque vai acontecer quando der certo?
        next:(usuario: any) => {
        // guardando os dados na variavel listaUsuarios
        console.log(usuario);
        this.listarUsuario()
        this.form.reset()
      },

      // caso de errado
      error:()=>{
        console.log('deu ruim');
      }
    })
  }
}