import { RickAndMortyApiDataStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadApiResponseCharacterAction,
} from "../../actions/characters/types";

const charactersReducer = (
  currentApiData: RickAndMortyApiDataStructure,
  action: CharactersAction
): RickAndMortyApiDataStructure => {
  let newApiData: RickAndMortyApiDataStructure;

  if (action.type === CharactersActionType.loadApiDataResponse) {
    newApiData = { ...(action as LoadApiResponseCharacterAction).payload };
    return newApiData;
  }
  return currentApiData;
};

export default charactersReducer;
