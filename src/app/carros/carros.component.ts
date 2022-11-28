import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../service/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
form!:FormGroup
carros!: CriarCarros[]
listaTipoCarros!: any[]
  constructor(  private fb: FormBuilder,
    private salvarCarroService: CarrosService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      nome: new FormControl(''),
      tipo: new FormControl(''),
      portas: new FormControl(''),
      nPessoas: new FormControl(''),
      locadora: new FormControl('')
    })
   this.lerDadosCarros()
   this.lerDadosTipoCarros()
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
  filterCarros(TipoCarro:any){
    console.log(TipoCarro);
    
    return this.carros.filter(c=>c.tipoCarro.nome === TipoCarro)
    
  }
  salvarDadosCarros() {
 
   const id = (this.carros[(this.carros.length) - 1].id)+1
   const nome = this.form.controls['carro'].value
   const tipoCarro = this.form.controls['tipo'].value
   const portas = this.form.controls['portas'].value
   const nPessoas = this.form.controls['nPessoas'].value
   const locadora = this.form.controls['locadora'].value
 
   const carro:CriarCarros = { 
     id:id,
     nome:nome, 
     tipoCarro:tipoCarro, 
     portas:portas,
     nPessoas:nPessoas,
     locadora:locadora

   }
   console.log(carro)

   

     this.salvarCarroService.salvarCarro(carro).subscribe({
       next:()=>{
         console.log('salvou');
         this.lerDadosCarros()
         
       },
       error:()=>{
         console.log('erro salvarcarro');
         
       }
     })

 }
 
 
}
