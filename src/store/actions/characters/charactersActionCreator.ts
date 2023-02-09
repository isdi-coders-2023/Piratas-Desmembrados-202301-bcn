import { RickAndMortyApiDataStructure } from "../../../data/types";
import {
  CharactersActionType,
  LoadApiResponseCharacterAction as LoadApiDataCharacterAction,
} from "./types";

export const loadApiDataActionCreator = (
  apiData: RickAndMortyApiDataStructure
): LoadApiDataCharacterAction => ({
  type: CharactersActionType.loadApiDataResponse,
  payload: apiData,
});
