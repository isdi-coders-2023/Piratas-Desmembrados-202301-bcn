import { CharactersStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharacterAction,
} from "../../contexts/characters/actions/characters/types";

const charactersReducer = (
  currentCharacter: CharactersStructure,
  action: CharactersAction
): CharactersStructure => {
  let newCharacter: CharactersStructure;

  switch (action.type) {
    case CharactersActionType.loadCharacters:
      newCharacter = [...(action as LoadCharacterAction).payload];
      break;

    default:
      newCharacter = currentCharacter;
  }
  return newCharacter;
};

export default charactersReducer;
