import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'


import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { CarrosClienteComponent } from './carros-cliente/carros-cliente.component';
import { ModalCarroComponent } from './modal-carro/modal-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosComponent,
    CarrosClienteComponent,
    ModalCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
