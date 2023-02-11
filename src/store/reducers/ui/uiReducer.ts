import { UiAction, UiActionType } from "../../actions/ui/types";

const uiReducer = (currentIsLoading: boolean, action: UiAction): boolean => {
  switch (action.type) {
    case UiActionType.setLoaderOn:
      return true;

    case UiActionType.setLoaderOff:
      return false;

    default:
      return currentIsLoading;
  }
};

export default uiReducer;
