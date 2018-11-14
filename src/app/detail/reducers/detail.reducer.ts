import { Action } from '@ngrx/store';
import { DetailActions, DetailActionTypes } from '../actions/detail.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: DetailActions): State {
  switch (action.type) {

    case DetailActionTypes.LoadDetails:
      return state;


    default:
      return state;
  }
}
