import { useContext, useCallback } from "react";
import { RickAndMortyApiDataStructure } from "../../data/types";
import { loadApiDataActionCreator } from "../../store/actions/characters/charactersActionCreator";
import CharactersContext from "../../store/contexts/characters/CharactersContext";

export interface UseReceiveCharactersDataStructure {
  getRickApiData: () => void;
}

export const useReceiveCharactersData =
  (): UseReceiveCharactersDataStructure => {
    const { dispatch } = useContext(CharactersContext);

    const getRickApiData = useCallback(async () => {
      const response = await fetch(process.env.REACT_APP_API_URL!);
      const apiData = (await response.json()) as RickAndMortyApiDataStructure;
      dispatch(loadApiDataActionCreator(apiData));
    }, [dispatch]);

    return { getRickApiData };
  };
