import { CharactersStructure } from "../../../data/types";
import { CharactersActionType, LoadCharacterAction } from "./types";

export const loadCharactersActionCreator = (
  characters: CharactersStructure
): LoadCharacterAction => ({
  type: CharactersActionType.loadCharacters,
  payload: characters,
});
