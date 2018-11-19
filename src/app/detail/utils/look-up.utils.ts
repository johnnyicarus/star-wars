import { EntityType } from '../../core/models/entity.model';
import { DetailLookup } from '../actions/detail.actions';
import { config } from '../../app.config';
import { Store } from '@ngrx/store';
import { DetailState } from '../reducers/detail.reducer';

export const referenceLookUp = (urls: string[], type: EntityType, store: Store<DetailState>) => {

  if (urls.length > 0) {
    urls.map((url: string) => store.dispatch(new DetailLookup({
      detail: {
        type,
        id: url.match(config.idRegExp)[1],
      }
    })));
  }
};
