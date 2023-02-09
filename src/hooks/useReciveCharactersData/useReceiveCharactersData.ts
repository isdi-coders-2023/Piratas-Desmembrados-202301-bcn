import { useContext, useCallback } from "react";
import { RickAndMortyApiResponseStructure } from "../../data/types";
import { loadCharactersActionCreator } from "../../store/actions/characters/charactersActionCreator";
import CharactersContext from "../../store/contexts/characters/CharactersContext";

export interface UseReceiveCharactersDataStructure {
  getCharactersData: () => void;
}

export const useReceiveCharactersData =
  (): UseReceiveCharactersDataStructure => {
    const { dispatch } = useContext(CharactersContext);

    const getCharactersData = useCallback(async () => {
      const response = await fetch(process.env.REACT_APP_API_URL!);
      const characters =
        (await response.json()) as RickAndMortyApiResponseStructure;
      dispatch(loadCharactersActionCreator(characters.results));
    }, [dispatch]);

    return { getCharactersData };
  };
