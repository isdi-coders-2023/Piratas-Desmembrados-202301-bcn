import { CharactersStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadApiResponseCharacterAction,
} from "../../actions/characters/types";

const charactersReducer = (
  currentCharacter: CharactersStructure,
  action: CharactersAction
): CharactersStructure => {
  let newCharacter: CharactersStructure;

  if (action.type === CharactersActionType.loadCharacters) {
    newCharacter = [...(action as LoadApiResponseCharacterAction).payload];
    return newCharacter;
  }
  return currentCharacter;
};

export default charactersReducer;
