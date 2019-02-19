import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/index';
import { INCREMENT, DECREMENT, ADD_USER } from '../actions/counter.actions';

@Component({
  selector: 'app-increment',
  template: `<div>
  <h1>{{(counter$ | async).value}}</h1>
  <button (click)="decrement()">-</button>
  <button (click)="increment()">+</button>
  <button (click)="addUser()">add user</button>
</div>`,
  styles: []
})
export class IncrementComponent {
  @select('counter') public counter$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  addUser() {
    this.ngRedux.dispatch({ type: ADD_USER, payload: 46 })
  }

}