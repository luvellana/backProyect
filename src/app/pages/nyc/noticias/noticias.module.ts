import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import {Routes, RouterModule} from '@angular/router';
import { NoticiasService } from '../../../shared/services/noticias.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../../../../environments/environment';
import {StoreModule} from '@ngrx/store';
import {metaReducers} from './core/meta';
import {reducers} from './core';

const routes: Routes = [
  {path: '', component: NoticiasComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    StoreDevtoolsModule.instrument({name: 'Angular Course', logOnly: environment.production}),
        StoreModule.forRoot(reducers, {metaReducers}),
  ],
  exports: [RouterModule],
  declarations: [NoticiasComponent],
  providers: [
    NoticiasService
  ]
})
export class NoticiasModule { }