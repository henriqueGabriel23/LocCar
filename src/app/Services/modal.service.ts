import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  mostrarModal:boolean = false
  constructor() { }
   // Alternar Modal
   toggleModal(){
    this.mostrarModal = !this.mostrarModal
  }
  
}
