import { useContext } from "react";
import { loadCharactersActionCreator } from "../../store/actions/characters/charactersActionCreator";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import { RickAndMortyApiResponseStructure } from "./types";

export interface UseRevciveCharactersDataStructure {
  getCharactersData: () => void;
}

export const useReciveCharactersData =
  (): UseRevciveCharactersDataStructure => {
    const { dispatch } = useContext(CharactersContext);

    const getCharactersData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL!}`);
      const characters =
        (await response.json()) as RickAndMortyApiResponseStructure;
      dispatch(loadCharactersActionCreator(characters.results));
    };

    return { getCharactersData };
  };
