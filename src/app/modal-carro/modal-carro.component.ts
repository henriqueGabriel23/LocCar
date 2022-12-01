import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../service/carros.service';

@Component({
  selector: 'app-modal-carro',
  templateUrl: './modal-carro.component.html',
  styleUrls: ['./modal-carro.component.scss']
})
export class ModalCarroComponent {
  form!:FormGroup
  carros!: CriarCarros[]
  listaTipoCarros!: any[]
  listaLocadora!: any[]
  selected:any = "0"
  carroId!:number
  verificarEditar:boolean = false
  
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
      this.form.controls['tipo'].setValue('0')
      this.form.controls['locadora'].setValue('0')
     this.lerDadosCarros()
     this.lerDadosTipoCarros()
     this.lerDadosLocadora()
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
    lerDadosTipoCarros(){
      this.salvarCarroService.lerTipoCarros().subscribe({
       next: (tipoCarro:any[]) => {
        this.listaTipoCarros = tipoCarro
  
         console.log(tipoCarro);
         
       },
       error: () => {
         console.log('erro lerCarros');
  
       }
     });
    }
    lerDadosLocadora(){
      this.salvarCarroService.lerLocadora().subscribe({
       next: (locadora:any[]) => {
        this.listaLocadora = locadora
  
         console.log(locadora);
         
       },
       error: (error:any) => {
         console.log('erro locadora' + error);
  
       }
     });
    }
    filterCarros(tipoCarro:any){
      
      return this.carros.filter(c => c.tipoCarro.nome === tipoCarro)
      
    }
}
