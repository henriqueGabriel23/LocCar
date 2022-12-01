import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../Services/carros.service';

@Component({
  selector: 'app-carros-cliente',
  templateUrl: './carros-cliente.component.html',
  styleUrls: ['./carros-cliente.component.scss']
})
export class CarrosClienteComponent {
  form!:FormGroup
  carros!:CriarCarros[]
  mostrarModal:boolean = false

  constructor(  private fb: FormBuilder,
    private salvarCarroService: CarrosService) {}
    ngOnInit(): void {
      this.form = this.fb.group({
        nomeCarro: new FormControl(''),
        tipo: new FormControl(''),
        portas: new FormControl(''),
        nPessoas: new FormControl(''),
        locadora: new FormControl('')
      })
      this.lerDadosCarros()
      this.form.controls['tipo'].setValue('0')
      this.form.controls['locadora'].setValue('0')
   
    }
    lerDadosCarros(){
      this.salvarCarroService.lerCarros().subscribe({
       next: (carro: CriarCarros[]) => {
         this.carros = carro
         console.log(this.carros);
         
       },
       error: () => {
         console.log('erro lerCarros');
  
       }
     });
     
    }
    // Alternar Modal
    toggleModal(){
      this.mostrarModal = !this.mostrarModal
    }
}


