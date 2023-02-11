export enum UiActionType {
  setLoaderOn,
  setLoaderOff,
}

export interface UiAction {
  type: UiActionType;
}
