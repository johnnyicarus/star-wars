import { config } from '../../app.config';
import { ResourceState } from '../models/entity.model';

export const getCount = (state: ResourceState, term: string): number => {

  return state.searches.hasOwnProperty(term)
    ? state.searches[term].count
    : state.count;
};

export const getTotal = (state: ResourceState, term: string): number => {

  return state.searches.hasOwnProperty(term)
    ? state.searches[term].results.length
    : state.ids.length;
};

export const isLargerThan = (a: number, b: number): boolean => a > b;

export const calculatePage = (length: number, loadMore: boolean): number => loadMore
  ? Math.ceil((length / config.entitiesPerPage) + 1)
  : Math.ceil((length / config.entitiesPerPage));


export const notAllEntitiesLoaded = (total: number, count: number): boolean => count === 0 || total < count;
