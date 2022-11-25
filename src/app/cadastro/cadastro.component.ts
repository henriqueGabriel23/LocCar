import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    // variavel que guarda o que tem nos inputs
    form!: FormGroup;

  constructor() { }
  
  ngOnInit(): void {
  }

}
