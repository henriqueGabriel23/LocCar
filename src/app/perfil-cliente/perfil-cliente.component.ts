import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PerfilCliente } from '../models/perfil-cliente.model';
import { PerfilClienteService } from '../Services/perfil-cliente.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent {
  form!:FormGroup
  carros!: PerfilCliente[]
  selected:any = "0"

  constructor(  private fb: FormBuilder,
    private salvarCarroService:PerfilClienteService ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl('')
    })
}
}