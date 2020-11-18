import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CounterState} from './counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Select(CounterState.count)
  count$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
