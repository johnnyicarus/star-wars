import { Entity} from '../../core/models/entity.model';
import { Page } from '../../core/models/requests.model';

/**
 * Search is a page with a term
 */
export interface Search extends Page {
  term: string;
  count: number;
  results: Entity[];
}

export interface SearchResults {
  term: string;
  count: number;
  results: string[];
}
