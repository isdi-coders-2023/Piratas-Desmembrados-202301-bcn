import { createContext } from "react";
import { UiAction } from "../../actions/ui/types";

export interface UiContextStructure {
  isLoading: boolean;
  dispatch: React.Dispatch<UiAction>;
}

const UiContext = createContext<UiContextStructure>({
  isLoading: true,
  dispatch: () => {},
} as UiContextStructure);

export default UiContext;
