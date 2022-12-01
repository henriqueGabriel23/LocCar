import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../Services/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
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
  salvarDadosCarros() {
 
   const id = (this.carros[(this.carros.length) - 1].id)+1
   const nome = this.form.controls['nomeCarro'].value
   const tipoCarroId = this.form.controls['tipo'].value
   const portas = this.form.controls['portas'].value
   const nPessoas = this.form.controls['nPessoas'].value
   const locadoraId = this.form.controls['locadora'].value
 
   const carro:CriarCarros = { 
     id:id,
     nome:nome, 
     tipoCarroId:tipoCarroId, 
     portas:portas,
     nPessoas:nPessoas,
     locadoraId:locadoraId
   }
   console.log(carro)

   

     this.salvarCarroService.salvarCarro(carro).subscribe({
       next:()=>{
         console.log('salvouum carro');
         this.lerDadosCarros()
         this.lerDadosLocadora()
         this.lerDadosTipoCarros()
         
       },
       error:(error:any)=>{
         console.log('erro salvarcarro' + error);
         
       }
     })

 }
 deletarDadosCarros(id: number) {
  this.salvarCarroService.deletarCarro(id).subscribe({
    next: (dados: any) => {
      console.log(dados);
      this.lerDadosCarros()
    },
    error: (erro: any) => {
      console.log('nao deu bom :(' + erro);
    }
  })
}
editarDadosCarros(){
  const id = this.carroId
  const nome = this.form.controls['nomeCarro'].value
  const tipoCarroId = this.form.controls['tipo'].value
  const portas = this.form.controls['portas'].value
  const nPessoas = this.form.controls['nPessoas'].value
  const locadoraId = this.form.controls['locadora'].value

  const carro:CriarCarros = { 
    id:id,
    nome:nome, 
    tipoCarroId:tipoCarroId, 
    portas:portas,
    nPessoas:nPessoas,
    locadoraId:locadoraId
  }
    this.salvarCarroService.editarUsuario(carro).subscribe({
      next:()=>{
        console.log('deu certo');
        this.lerDadosCarros()
      },
      error:(error:any)=>{
        console.log('erro editar');
        
      }
    })
    this.verificarEditar = false
    this.form.reset()
   }

   EditarCarros2(itemCarros:CriarCarros){
    this.carroId = itemCarros.id
    this.form.controls["nomeCarro"].setValue(itemCarros.nome)
    this.form.controls["tipo"].setValue(itemCarros.tipoCarroId)
    this.form.controls["portas"].setValue(itemCarros.portas)
    this.form.controls["nPessoas"].setValue(itemCarros.nPessoas)
    this.form.controls["locadora"].setValue(itemCarros.locadoraId)
    this.verificarEditar = true
       
  }
 
}
