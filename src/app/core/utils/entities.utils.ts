import { Entity, EntityType} from '../models/entity.model';
import { Page, GetRequest, GetResult } from '../models/requests.model';
import { mapToEntity } from '../../utils/entity.utils';

export const mapToPage = (request: GetRequest, type: EntityType): Page => {
  const results = request.results.map((result: GetResult): Entity => mapToEntity(result, type));

  return {
    results,
    count: request.count,
  };
};
