import {
  CharactersAction,
  CharactersActionType,
  LoadApiResponseCharacterAction,
} from "../store/actions/characters/types";
import { UiAction } from "../store/actions/ui/types";
import { CharactersContextStructure } from "../store/contexts/characters/CharactersContext";
import { UiContextStructure } from "../store/contexts/UiContext/UiContext";

export const dispatch: React.Dispatch<CharactersAction> = jest.fn();
export const apiData = {
  info: {
    count: 826,
    next: "https://rickandmortyapi.com/api/character?page=2",
    pages: 42,
    prev: null,
  },
  results: [],
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

export const dispatchUi: React.Dispatch<UiAction> = jest.fn();

const isLoading = false;

export const mockUiDispatch: UiContextStructure = { dispatchUi, isLoading };
