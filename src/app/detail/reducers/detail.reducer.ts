import { DetailActions, DetailActionTypes } from '../actions/detail.actions';
import { Detail } from '../models/detail.model';

export interface DetailState {
  currentDetail: Detail;
}

export const detailInitialState: DetailState = {
  currentDetail: {
    id: '',
    type: 'films',
  },
};

export function detailReducer(state = detailInitialState, action: DetailActions): DetailState {
  switch (action.type) {
    case DetailActionTypes.LoadDetail:
      return {
        currentDetail: action.payload.detail,
      };
    default:
      return state;
  }
}
