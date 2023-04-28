import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AberturaComponent } from './component/abertura/abertura.component';
import { MaterialDidaticoComponent } from './component/material-didatico/material-didatico.component';
import { VerTodosComponent } from './component/ver-todos/ver-todos.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {path: 'abertura', component: AberturaComponent, canActivate: [UsuarioAutenticadoGuard]},
  {path: 'material-didatico', component: MaterialDidaticoComponent, canActivate: [UsuarioAutenticadoGuard]},
  {path: 'ver-todos', component: VerTodosComponent, canActivate: [UsuarioAutenticadoGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
