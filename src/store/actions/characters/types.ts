import { RickAndMortyApiDataStructure } from "../../../data/types";

export enum CharactersActionType {
  loadApiDataResponse,
  default,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadApiResponseCharacterAction extends CharactersAction {
  payload: RickAndMortyApiDataStructure;
}
