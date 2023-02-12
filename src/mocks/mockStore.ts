import {
  CharactersAction,
  CharactersActionType,
  LoadApiResponseCharacterAction,
} from "../store/actions/characters/types";
import { CharactersContextStructure } from "../store/contexts/characters/CharactersContext";

export const dispatch: React.Dispatch<CharactersAction> = jest.fn();

export const apiData = {
  info: {
    count: 826,
    next: "https://rickandmortyapi.com/api/character?page=2",
    pages: 42,
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
      },
      location: {
        name: "Citadel of Ricks",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ],
};

export const mockStore: CharactersContextStructure = {
  characters: apiData,
  dispatch,
};

export const mockAction: LoadApiResponseCharacterAction = {
  type: CharactersActionType.loadApiDataResponse,
  payload: apiData,
};

export const mockDispatch = jest.spyOn(mockStore, "dispatch");
