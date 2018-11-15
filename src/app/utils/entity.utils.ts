import { EntityType } from '../core/models/entity.model';
import { config } from '../app.config';
import { GetResult } from '../core/models/requests.model';

export const mapToEntity = (result: GetResult, type: EntityType): any => ({
  ...result,
  id: result.url.match(config.idRegExp)[1],
  type,
});
