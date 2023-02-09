export interface RickAndMortyApiResponseStructure {
  info: RickAndMortyInfoApiStructure;
  results: CharacterStructure[];
}

export interface RickAndMortyInfoApiStructure {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface OriginStructure {
  name: string;
}

export interface LocationStructure {
  name: string;
}

export interface CharacterStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: OriginStructure;
  location: LocationStructure;
  image: string;
}

export type CharactersStructure = CharacterStructure[];
