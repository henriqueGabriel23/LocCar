import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../Services/carros.service';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-carros-cliente',
  templateUrl: './carros-cliente.component.html',
  styleUrls: ['./carros-cliente.component.scss']
})
export class CarrosClienteComponent {
  form!: FormGroup
  carros!: CriarCarros[]
  

  listaTipoCarros!: any[]
  listaLocadora!: any[]
  selected:any = "0"
  carroId!:number
  constructor(private fb: FormBuilder,
    private salvarCarroService: CarrosService,
    private modalService: ModalService) { }
  modal(): boolean {
    return this.modalService.mostrarModal
  }
  modalToggle(carro:CriarCarros){
    this.modalService.toggleModal()
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      nomeCarro: new FormControl(''),
      tipo: new FormControl(''),
      portas: new FormControl(''),
      nPessoas: new FormControl(''),
      locadora: new FormControl('')
    })
  
    this.lerDadosCarros()
    this.lerDadosTipoCarros()
    this.lerDadosLocadora()
    this.form.controls['tipo'].setValue('0')
    this.form.controls['locadora'].setValue('0')

  }
  lerDadosCarros() {
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

       console.log(this.listaTipoCarros);
       
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


