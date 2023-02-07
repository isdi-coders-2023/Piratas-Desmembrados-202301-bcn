import { CharactersStructure } from "../../../../../data/types";

export enum CharactersActionType {
  loadCharacters,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadCharacterAction extends CharactersAction {
  payload: CharactersStructure;
}
