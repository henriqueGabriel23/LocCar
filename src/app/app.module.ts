import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { PerfiladmComponent } from './perfiladm/perfiladm.component';
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { LocadoraComponent } from "./locadora/locadora.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        CadastroComponent,
        HomeComponent,
        CarrosComponent,
        PerfiladmComponent,
        LocadoraComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,

    ]
})
export class AppModule { }
