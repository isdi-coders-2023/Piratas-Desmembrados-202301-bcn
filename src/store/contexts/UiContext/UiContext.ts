import { createContext } from "react";
import { UiAction } from "../../actions/ui/types";

export interface UiContextStructure {
  isLoading: Boolean;
  dispatch: React.Dispatch<UiAction>;
}

const UiContext = createContext<UiContextStructure>({} as UiContextStructure);

export default UiContext;
