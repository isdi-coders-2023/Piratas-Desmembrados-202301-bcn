import { createContext } from "react";
import { UiAction } from "../../actions/ui/types";

export interface UiContextStructure {
  isLoading: boolean;
  dispatchUi: React.Dispatch<UiAction>;
}

const UiContext = createContext<UiContextStructure>({
  isLoading: true,
  dispatchUi: () => {},
} as UiContextStructure);

export default UiContext;
