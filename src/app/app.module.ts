import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HttpClientModule } from '@angular/common/http'

import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { CarrosClienteComponent } from './carros-cliente/carros-cliente.component';
import { PerfiladmComponent } from './perfiladm/perfiladm.component';
import { LocadoraComponent } from "./locadora/locadora.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
    declarations: [
        AppComponent,
    LoginComponent,
    ReservaComponent,
        CadastroComponent,
        HomeComponent,
        CarrosComponent,
        CarrosClienteComponent,
        PerfiladmComponent,
        LocadoraComponent,
        FooterComponent,
        HeaderComponent,
    CadastroComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientModule,
        ReactiveFormsModule,

    ]
})
export class AppModule { }
