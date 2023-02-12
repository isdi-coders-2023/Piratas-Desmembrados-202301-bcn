import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/ui/uiReducer";
import UiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [isLoading, dispatchUi] = useReducer(uiReducer, true);
  const uiStore = useMemo(() => ({ isLoading, dispatchUi }), [isLoading]);

  return <UiContext.Provider value={uiStore}> {children}</UiContext.Provider>;
};

export default UiContextProvider;
