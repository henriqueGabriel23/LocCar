import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    error: boolean = false


  constructor(private servicoUsuario:UsuariosService, private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
       // fazendo conecção entre ts e html
    this.form = this.formbuilder.group({
      nome: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
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
    // pegando as informações dos inputs
    let nomeInput = this.form.controls["nome"].value
    let numeroInput = this.form.controls["numero"].value
    let emailInoput = this.form.controls["email"].value
    let senhaInput = this.form.controls["senha"].value

    // verificando se os campos estão preenchidos
    this.form.controls["nome"].invalid
    if (this.form.controls["nome"].invalid){
      this.error = true
      console.log("nome obrigatorio");
      return // parando a função
    }

    this.form.controls["numero"].invalid
    if (this.form.controls["numero"].invalid){
      this.error = true
      console.log("numero obrigatorio");
      return
    }

    this.form.controls["email"].invalid
    if (this.form.controls["email"].invalid){
      this.error = true
      console.log("email obrigatorio");
      return
    }

    this.form.controls["senha"].invalid
    if (this.form.controls["senha"].invalid){
      console.log("senha obrigatorio");
      this.error = true
      return
    }



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
