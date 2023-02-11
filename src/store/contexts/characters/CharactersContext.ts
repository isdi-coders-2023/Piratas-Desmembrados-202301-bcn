import { createContext } from "react";
import { RickAndMortyApiDataStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

export interface CharactersContextStructure {
  characters: RickAndMortyApiDataStructure;
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext<CharactersContextStructure>({
  characters: {
    info: { count: 0, next: "", pages: 0, prev: "" },
    results: [
      {
        gender: "",
        id: 0,
        image: "",
        location: { name: "" },
        name: "",
        origin: { name: "" },
        species: "",
        status: "",
      },
    ],
  },
  dispatch: () => {},
} as CharactersContextStructure);

export default CharactersContext;
