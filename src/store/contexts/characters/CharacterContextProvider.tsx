import { useMemo, useReducer } from "react";
import charactersReducer from "../../reducers/characters/charactersReducers";
import CharactersContext from "./CharactersContext";

interface CharactersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CharacterContextProvider = ({
  children,
}: CharactersContextProviderProps): JSX.Element => {
  const [characters, dispatch] = useReducer(charactersReducer, []);

  const getCharacter = useMemo(() => ({ characters, dispatch }), [characters]);

  return (
    <CharactersContext.Provider value={getCharacter}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterContextProvider;
