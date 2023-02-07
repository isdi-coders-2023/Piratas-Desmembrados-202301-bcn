import { CharactersStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharacterAction,
} from "../../actions/characters/types";

const charactersReducer = (
  currentCharacter: CharactersStructure,
  action: CharactersAction
): CharactersStructure => {
  let newCharacter: CharactersStructure;

  if (action.type === CharactersActionType.loadCharacters) {
    newCharacter = [...(action as LoadCharacterAction).payload];
    return newCharacter;
  }
  return currentCharacter;
};

export default charactersReducer;
