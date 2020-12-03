import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: '', redirectTo: 'formhistoria', pathMatch: 'full'},
      {path: 'formhistoria', loadChildren: () => import('./form-historia/form-historia.module').then(m => m.FormHistoriaModule)},
      {path: 'formruta', loadChildren: () => import('./form-ruta/form-ruta.module').then(m => m.FormRutaModule)},
      {path: 'formtarifa', loadChildren: () => import('./form-tarifa/form-tarifa.module').then(m => m.FormTarifaModule)},
      {path: 'formhorario', loadChildren: () => import('./form-horario/form-horario.module').then(m => m.FormHorarioModule)},
      {path: 'formnoticia', loadChildren: () => import('./form-noticia/form-noticia.module').then(m => m.FromNoticiaModule)},
      {path: 'formcomunicado', loadChildren: () => import('./form-comunicado/form-comunicado.module').then(m => m.FormComunicadoModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [FormsComponent]
})
export class FormsModule { }