import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { PerfiladmComponent } from './perfiladm/perfiladm.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    CarrosComponent,
    PerfiladmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
