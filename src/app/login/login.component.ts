import { Component } from '@angular/core';
import { ServiceLoginService } from '../service/service-login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarClientes } from '../models/salvar-cliente';

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
    private ServiceLoginService: ServiceLoginService) { }

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

}
