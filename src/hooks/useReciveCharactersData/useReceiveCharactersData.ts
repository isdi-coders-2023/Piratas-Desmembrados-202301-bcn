import { useContext, useCallback } from "react";
import { RickAndMortyApiDataStructure } from "../../data/types";
import { loadApiDataActionCreator } from "../../store/actions/characters/charactersActionCreator";
import {
  setLoaderOffAction,
  setLoaderOnAction,
} from "../../store/actions/ui/uiActionCreator";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/UiContext/UiContext";

export interface UseReceiveCharactersDataStructure {
  getRickApiData: () => void;
}

export const useReceiveCharactersData =
  (): UseReceiveCharactersDataStructure => {
    const { dispatch } = useContext(CharactersContext);
    const { dispatch: uiDispatch } = useContext(UiContext);

    const getRickApiData = useCallback(async () => {
      uiDispatch(setLoaderOnAction());

      const response = await fetch(process.env.REACT_APP_API_URL!);
      const apiData = (await response.json()) as RickAndMortyApiDataStructure;

      uiDispatch(setLoaderOffAction());
      dispatch(loadApiDataActionCreator(apiData));
    }, [dispatch, uiDispatch]);

    return { getRickApiData };
  };
