/**
 * A person within the Star Wars universe
 */
import { EntityType } from './entity.model';

export interface Person {
  id: string;
  type: EntityType;
  /**
   * An array of urls of film resources that this person has been in.
   */
  films: any[];
  /**
   * The name of this person.
   */
  name: string;
  /**
   * The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
   */
  birth_year: string;
  /**
   * An array of starship resources that this person has piloted
   */
  starships: any[];
  /**
   * The hair color of this person.
   */
  hair_color: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The url of the planet resource that this person was born on.
   */
  homeworld: string;
  /**
   * The skin color of this person.
   */
  skin_color: string;
  /**
   * The eye color of this person.
   */
  eye_color: string;
  /**
   * The url of the species resource that this person is.
   */
  species: any[];
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The gender of this person (if known).
   */
  gender: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The height of this person in meters.
   */
  height: string;
  /**
   * An array of vehicle resources that this person has piloted
   */
  vehicles: any[];
  /**
   * The mass of this person in kilograms.
   */
  mass: string;
}
