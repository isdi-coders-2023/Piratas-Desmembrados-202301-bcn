import { createContext } from "react";
import { CharactersStructure } from "../../../data/types";

interface CharactersContextStructure {
  characters: CharactersStructure;
}

const CharactersContext = createContext({} as CharactersContextStructure);

export default CharactersContext;
