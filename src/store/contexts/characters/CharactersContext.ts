import { createContext } from "react";
import { RickAndMortyApiDataStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

export interface CharactersContextStructure {
  characters: RickAndMortyApiDataStructure;
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure
);

export default CharactersContext;
