import { CharactersStructure } from "../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadApiResponseCharacterAction,
} from "../store/actions/characters/types";
import { CharactersContextStructure } from "../store/contexts/characters/CharactersContext";

export const dispatch: React.Dispatch<CharactersAction> = jest.fn();
export const characters = [] as CharactersStructure;

export const mockStore: CharactersContextStructure = { characters, dispatch };

export const mockAction: LoadApiResponseCharacterAction = {
  type: CharactersActionType.loadCharacters,
  payload: characters,
};

export const mockDispatch = jest.spyOn(mockStore, "dispatch");
