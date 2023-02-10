import { RickAndMortyApiDataStructure } from "../../../data/types";

export enum CharactersActionType {
  loadApiDataResponse,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadApiResponseCharacterAction extends CharactersAction {
  payload: RickAndMortyApiDataStructure;
}
