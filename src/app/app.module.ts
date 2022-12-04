import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from "./reserva/reserva.component";
import { HttpClientModule } from '@angular/common/http';   
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ReservaComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,  
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
