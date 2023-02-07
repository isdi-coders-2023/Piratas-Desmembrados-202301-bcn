import { createContext } from "react";
import { CharacterStructure } from "../../../data/types";

interface CharactersContextStructure {
  characters: CharacterStructure;
}

const CharactersContext = createContext({} as CharactersContextStructure);

export default CharactersContext;
