import { Component } from '@angular/core';
import { ServiceLoginService } from '../Services/service-login.service';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarClientes } from '../models/salvar-cliente';
import { LocalStorageService } from '../local-service/local-storage.service';
import { RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
  cliente!: CriarClientes[];
  listaClientes: any;
  erro = "Email ou Senha Incorretos, Tente Novamente";



  constructor(
    private FormBulider: FormBuilder,
    private ServiceLoginService: ServiceLoginService,
    private LocalStorageService: LocalStorageService
  ) { }

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


  setItem() {
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
    for (let usuario of this.cliente) {
      if (usuario.email === this.form.controls["email"].value && usuario.senha === this.form.controls["senha"].value) {
        const login = true

        console.log("Login Concluido");

        this.LocalStorageService.set("id", usuario.id)

        this.LocalStorageService.set("email", usuario.email)

        this.LocalStorageService.set("senha", usuario.senha)

        console.log(this.LocalStorageService.get("email"));
        console.log(this.LocalStorageService.get("id"));
        console.log(this.LocalStorageService.get("senha"));

        return
      }

    }
    this.erro
  }
}


