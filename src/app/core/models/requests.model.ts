import { Entity } from './entity.model';

export interface GetRequest {
  count: number;
  results: any[];
}

export interface GetResult {
  url: string;
}

export interface Page {
  count: number;
  results: Entity[];
}
