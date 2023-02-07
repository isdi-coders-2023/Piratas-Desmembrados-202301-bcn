export interface RickAndMortyApiResponseStructure {
  info: RickAndMortyInfoApiStructure;
  results: RickAndMortyCharactersStructure;
}

export interface RickAndMortyInfoApiStructure {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface RickAndMortyCharactersStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}
