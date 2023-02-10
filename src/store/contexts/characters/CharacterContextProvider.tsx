import { useMemo, useReducer } from "react";
import { RickAndMortyApiDataStructure } from "../../../data/types";
import charactersReducer from "../../reducers/characters/charactersReducers";
import CharactersContext from "./CharactersContext";

interface CharactersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CharacterContextProvider = ({
  children,
}: CharactersContextProviderProps): JSX.Element => {
  const [characters, dispatch] = useReducer(charactersReducer, {
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
  } as RickAndMortyApiDataStructure);

  const characterStore = useMemo(
    () => ({ characters, dispatch }),
    [characters]
  );

  return (
    <CharactersContext.Provider value={characterStore}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterContextProvider;
