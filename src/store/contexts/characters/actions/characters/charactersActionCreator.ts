import { CharactersStructure } from "../../../../../data/types";
import { CharactersActionType, LoadCharacterAction } from "./types";

export const loadCharactersActionCreator = (
  character: CharactersStructure
): LoadCharacterAction => ({
  type: CharactersActionType.loadCharacters,
  payload: character,
});
