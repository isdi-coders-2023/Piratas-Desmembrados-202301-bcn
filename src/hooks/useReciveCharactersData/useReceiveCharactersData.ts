import { useContext, useCallback } from "react";
import {
  CharacterStructure,
  RickAndMortyApiDataStructure,
} from "../../data/types";
import { loadApiDataActionCreator } from "../../store/actions/characters/charactersActionCreator";
import {
  setLoaderOffAction,
  setLoaderOnAction,
} from "../../store/actions/ui/uiActionCreator";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/UiContext/UiContext";

export interface UseReceiveCharactersDataStructure {
  getRickApiData: () => void;
  getCharacterById: (id: number) => void;
}

export const useReceiveCharactersData =
  (): UseReceiveCharactersDataStructure => {
    const { dispatch } = useContext(CharactersContext);
    const { dispatchUi } = useContext(UiContext);

    const getRickApiData = useCallback(async () => {
      try {
        dispatchUi(setLoaderOnAction());

        const response = await fetch(process.env.REACT_APP_API_URL!);
        const apiData = (await response.json()) as RickAndMortyApiDataStructure;

        dispatch(loadApiDataActionCreator(apiData));
        setTimeout(() => dispatchUi(setLoaderOffAction()), 1000);
      } catch (error) {
        return (error as Error).message;
      }
    }, [dispatch, dispatchUi]);

    const getCharacterById = useCallback(
      async (id: number) => {
        try {
          dispatchUi(setLoaderOnAction());

          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`!
          );
          const character = (await response.json()) as CharacterStructure;
          const charaterId = {
            info: {
              count: 826,
              pages: 42,
              next: "https://rickandmortyapi.com/api/character?page=2",
              prev: null,
            },
            results: [character],
          };
          dispatch(loadApiDataActionCreator(charaterId));
          setTimeout(() => dispatchUi(setLoaderOffAction()), 1000);
        } catch (error) {
          return (error as Error).message;
        }
      },
      [dispatch, dispatchUi]
    );

    return { getRickApiData, getCharacterById };
  };
