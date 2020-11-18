import {CounterModel} from './counter.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import produce from "immer";
import {Injectable} from '@angular/core';

export class AddAction {
  static readonly type = 'Add';
}

export class ResetAction {
  static readonly type = 'Reset';
}

@State<CounterModel>({
  name: 'count',
  defaults: {
    count: 0
  }
})
@Injectable()
export class CounterState {
  @Selector()
  static count(state: CounterModel): number {
    return state.count;
  }

  @Action(AddAction)
  add({ getState, setState }: StateContext<CounterModel>): void {
    const state = getState();
    setState(produce(draft => {
      draft.count = state.count + 1;
    }));
  }

  @Action(ResetAction)
  reset({ setState }: StateContext<CounterModel>): void {
    setState(produce(draft => {
      draft.count = 0;
    }));
  }
}
