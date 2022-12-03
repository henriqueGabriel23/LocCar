import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';
import { LocadoraComponent } from './locadora/locadora.component';
import { LoginComponent } from './login/login.component';
import { PerfiladmComponent } from './perfiladm/perfiladm.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [

  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'login', component:LoginComponent},
  {path:'carros', component:CarrosComponent},
  {path:'reservas', component:ReservaComponent},
  {path:'perfil', component:PerfiladmComponent},
  {path:'Locadora', component:LocadoraComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
