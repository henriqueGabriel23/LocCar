import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarCarros } from '../models/cadastro.model';
import { CarrosService } from '../Services/carros.service';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-modal-carro',
  templateUrl: './modal-carro.component.html',
  styleUrls: ['./modal-carro.component.scss']
})
export class ModalCarroComponent {
  @Input() carro!:any

  carros!: CriarCarros[]
  
  listaTipoCarros!: any[]
  listaLocadora!: any[]
  constructor(private fb: FormBuilder,
    private salvarCarroService: CarrosService,
    private modalService: ModalService) { }
  ngOnInit(): void {
    this.lerDadosCarros()
  }
  modal(): boolean {
    return this.modalService.mostrarModal
  }
  modalToggle() {
    this.modalService.toggleModal()
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
