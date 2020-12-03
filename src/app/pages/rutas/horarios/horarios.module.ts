import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HorariosComponent } from './horarios.component';

const routes: Routes = [
  {path: '', component: HorariosComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [HorariosComponent]
})
export class HorariosModule { }