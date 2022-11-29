import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuarioModel } from '../models/loccar.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    // variavel que guarda o que tem nos inputs
    form!: FormGroup;

    // variavel que guarda a lista de usuarios
    listaUsuarios!: usuarioModel[];


  constructor(private servicoUsuario:UsuariosService, private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
       // fazendo conecção entre ts e html
    this.form = this.formbuilder.group({
      nome: "",
      numero: "",
      email: "",
      senha: ""
    })
    this.listarUsuario()
  }

  listarUsuario(){
    this.servicoUsuario.getUsuarios().subscribe({
      // o que vai acontecer quando der certo?
      next:(usuarios: usuarioModel[]) =>{
        // guardando os dados na variavel listaUsuarios
        this.listaUsuarios = usuarios
        console.log(this.listaUsuarios);  
      }
    })
  }

  // função de cadastrar
  postarUsuario(){
    let idLength = ((this.listaUsuarios[(this.listaUsuarios.length) -1].id) +1)
    let nomeInput = this.form.controls["nome"].value
    let numeroInput = this.form.controls["numero"].value
    let emailInoput = this.form.controls["email"].value
    let senhaInput = this.form.controls["senha"].value

    let dados ={
      id: idLength,
      nome: nomeInput,
      numero: numeroInput,
      email: emailInoput,
      senha: senhaInput
    }

    this.servicoUsuario.postUsuario(dados).subscribe({
        // oque vai acontecer quando der certo?
        next:(usuario: usuarioModel[]) => {
        // guardando os dados na variavel listaUsuarios
        this.listarUsuario()
      },

      // caso de errado
      error:()=>{
        console.log('deu ruim ');
      }
    })
  }
}
