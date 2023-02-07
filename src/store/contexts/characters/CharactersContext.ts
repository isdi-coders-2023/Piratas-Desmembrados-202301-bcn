import { createContext } from "react";
import { CharacterStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

interface CharactersContextStructure {
  characters: CharacterStructure[];
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext({} as CharactersContextStructure);

export default CharactersContext;
