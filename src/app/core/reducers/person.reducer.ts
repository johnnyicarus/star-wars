import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Person } from '../models/person.model';
import { PersonActions, PersonActionTypes } from '../actions/person.actions';
import { addSearchIfNew, setAddManyState } from '../utils/state.utils';

export interface PersonState extends EntityState<Person> {
  count: number;
  searches: {
    [term: string]: {
      term: string;
      count: number;
      results: string[];
    }
  };
}

export const personAdapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const personInitialState: PersonState = personAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function personReducer(
  state = personInitialState,
  action: PersonActions,
): PersonState {
  switch (action.type) {
    case PersonActionTypes.AddPerson:
      return personAdapter.addOne(action.payload.entity, state);
    case PersonActionTypes.AddPeople:
      return personAdapter.addMany(<Person[]>action.payload.results, <PersonState>setAddManyState(<PersonState>state, action.payload));
    case PersonActionTypes.InitializePeople:
      return <PersonState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}
