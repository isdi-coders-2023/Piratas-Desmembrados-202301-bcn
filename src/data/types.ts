export interface OriginStructure {
  name: string;
}

export interface LocationStructure {
  name: string;
}

export interface CharactersStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: OriginStructure;
  location: LocationStructure;
  image: string;
}
