import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpresaComponent } from './componentes/empresa/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './componentes/empresa/listar-empresa/listar-empresa.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listarEmpresa'},
  {path: 'listarEmpresa', component: ListarEmpresaComponent},
  {path: 'crearempresa', component:CrearEmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
