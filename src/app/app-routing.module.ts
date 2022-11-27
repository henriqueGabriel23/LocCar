import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';
import { PerfiladmComponent } from './perfiladm/perfiladm.component';

const routes: Routes = [

  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'carros', component:CarrosComponent},
  {path:'perfil', component:PerfiladmComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
