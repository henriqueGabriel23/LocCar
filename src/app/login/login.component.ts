import { Component } from '@angular/core';
import { ServiceLoginService } from '../Services/service-login.service';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarClientes } from '../models/salvar-cliente';
import { LocalStorageService } from '../local-service/local-storage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
  cliente!: CriarClientes[];



  constructor(
    private FormBulider: FormBuilder,
    private ServiceLoginService: ServiceLoginService,
    private LocalStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.lerClientes()

    this.form = this.FormBulider.group({

      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])

    });


  }

  lerClientes() {

    this.ServiceLoginService.lerClientes().subscribe({
      next: (cliente: CriarClientes[]) => {
        this.cliente = cliente;
        console.log(cliente);

      },
      error: () => {
        console.log("erro lerClientes");
      }
    });

  }

  // setItem() {
    // console.log(this.cliente[(this.cliente.length) - 1]);
    // const id = this.cliente[(this.cliente.length) - 1].id + 1;
    // const email = this.form.controls["email"].value;
    // const senha = this.form.controls["senha"].value;


  //   const clientes: CriarClientes = { id: id, email: email, senha: senha };

  //   this.LocalStorageService.set(this.setItem).subscribe({
  //     next: () => {
  //       console.log("entrou adm");
  //       this.lerClientes()
  //       this.setItem()
  //     },
  //     error: () => {
  //       console.log("erro fazer login");

  //     }
  //   })

  // }

  setItem(){
    console.log(this.cliente[(this.cliente.length) - 1]);
    const id = this.cliente[(this.cliente.length) - 1].id + 1;
    const email = this.form.controls["email"].value;
    const senha = this.form.controls["senha"].value;


    localStorage.setItem(email, senha);
    console.log(email, senha)

    let usuarios = this.cliente.filter(x => x.email === email && x.senha === senha)
    localStorage.setItem('user', `${usuarios}`)
  }

  getItem() {


    
    const id = this.cliente[(this.cliente.length) - 1].id + 1;
    const email = this.form.controls["email"].value;
    const senha = this.form.controls["senha"].value;

    const cliente: CriarClientes = { id: id, email: email, senha: senha};

    const usuarios = this.cliente.filter(x => x.email === email && x.senha === senha);



    const inputemail = localStorage.getItem(email);
    const inputsenha = localStorage.getItem(senha);

    if (email === inputemail) {
      console.log("certo")
      
    }
    else {
      console.log("erro")
    }

    if (senha === inputsenha) {
      console.log("certo")
    }
    else {
      console.log("erro")
    }

  }

function useState<T>(arg0: never[]): [any, any] {
  throw new Error('Function not implemented.');
}

