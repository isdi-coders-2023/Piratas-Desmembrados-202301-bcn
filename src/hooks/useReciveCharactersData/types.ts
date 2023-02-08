import { CharacterStructure } from "../../data/types";

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
