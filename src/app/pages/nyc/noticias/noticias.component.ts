import { Component, OnDestroy,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoticiasService } from '../../../shared/services/noticias.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnDestroy {

  noticias = [];

  noticiaSubs: Subscription;

  nycSubs: Subscription;

  cart = [];

  constructor(private store: Store<any>,
              private noticiasService: NoticiasService) {

  }

  ngOnInit(): void {

    this.nycSubs = this.store.select(s => s.nyc).subscribe(res => {
      this.cart = Object.assign([], res.items);
      // JSON.parse((JSON.stringify(res))
    });

    this.noticiaSubs = this.noticiasService.getNoticias().subscribe(res => {

      console.log('RESPUESTA: ', res);
      console.log('RESPUESTA: ', Object.entries(res));

      Object.entries(res).map(p => this.noticias.push(p[1]));

    });

  }

  ngOnDestroy(): void {
    this.noticiaSubs ? this.noticiaSubs.unsubscribe() : '';
    this.nycSubs ? this.nycSubs.unsubscribe() : '';
  }

}