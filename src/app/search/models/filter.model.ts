export interface Filter {
  films: boolean;
  people: boolean;
  planets: boolean;
  species: boolean;
  starships: boolean;
  vehicles: boolean;
}

export interface FilterChange {
  name: string;
  value: boolean;
}
