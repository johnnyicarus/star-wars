import { Entity, EntityType} from '../models/entity.model';
import { Page, GetRequest, GetResult } from '../models/requests.model';

export const mapToPage = (request: GetRequest, type: EntityType): Page => {
  const results = request.results.map((result: GetResult): Entity => <Entity>({
    ...result,
    id: result.url.match(/([^\/]*)\/*$/)[1],
    type,
  }));

  return {
    results,
    count: request.count,
  };
};
