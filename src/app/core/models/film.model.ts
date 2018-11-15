/**
 * A Star Wars film
 */
import { Entity, EntityType } from './entity.model';

export interface Film {
  id: string;
  readonly type: EntityType;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The people resources featured within this film.
   */
  characters: any[];
  /**
   * The planet resources featured within this film.
   */
  planets: any[];
  /**
   * The episode number of this film.
   */
  episode_id: number;
  /**
   * The director of this film.
   */
  director: string;
  /**
   * The species resources featured within this film.
   */
  species: any[];
  /**
   * The producer(s) of this film.
   */
  producer: string;
  /**
   * The starship resources featured within this film.
   */
  starships: any[];
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: any[];
  /**
   * The release date at original creator country.
   */
  release_date: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
}
