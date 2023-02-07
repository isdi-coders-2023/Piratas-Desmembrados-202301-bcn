import { RickAndMortyApiResponseStructure } from "./types";

export const useReciveCharactersData = () => {
  (async () => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY!}`);
    const characters =
      (await response.json()) as RickAndMortyApiResponseStructure;
    return characters;
  })();
};
