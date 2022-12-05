// lucas
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Reserva_cliente } from '../model/model';
import { ReservaService } from '../Services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {
  selected:any = "0"
  // guarda os dados  
  listaReserva!: any[];  
  elementoID!: number;
  form!: FormGroup;
  Cadastro: boolean = true;
  servicoReserva: any;
  reservas!: Reserva_cliente[];

  // injeçao de items de fora
  constructor(private reservaService : ReservaService  , private fb: FormBuilder) { }

  ngOnInit(): void {
    //  carrega ao iniciar o cite
    this.form = this.fb.group({
      nome: new FormControl('',[Validators.required]),
      endereco: new FormControl('',[Validators.required]),
      telefone: new FormControl('',[Validators.required , Validators.email])
    })
    this.ListarReserva()
  }
  ListarReserva() {
    this.servicoReserva.PegarReserva().subscribe({
      next: (dados: Reserva_cliente[]) => {
        this.listaReserva = dados;
        console.log(this.listaReserva);
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }
  CadastrarReservas() {
    const data = this.form.controls["data"].value
    const horario = this.form.controls["horario"].value
    const dataentrega = this.form.controls["dataentrega"].value
    
    let dados = {
      id: this.listaReserva[(this.listaReserva.length) - 1].id + 1,
      data:data,
      horario: horario,
      dataentrega: dataentrega
    }
    this.servicoReserva.CadastarReserva(dados).subscribe({
      next: (dados: Reserva_cliente[]) => {
        console.log(dados);
        this.ListarReserva()
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }
  DeletarReserva(id: number) {
    this.servicoReserva.DeletarReserva(id).subscribe({
      next: (dados: Reserva_cliente[]) => {
        console.log(dados);
        this.ListarReserva()
      },
      error: (erro: any) => {
        console.log('nao deu bom :(' + erro);
      }
    })
  }
}
