import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {AddAction, ResetAction} from './counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {}

  onAddClick(): void {
    this.store.dispatch(new AddAction());
  }

  onResetClick(): void {
    this.store.dispatch(new ResetAction());
  }
}
