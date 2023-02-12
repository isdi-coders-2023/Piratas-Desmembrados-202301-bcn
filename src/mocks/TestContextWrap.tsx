import CharactersContext, {
  CharactersContextStructure,
} from "../store/contexts/characters/CharactersContext";
import UiContext, {
  UiContextStructure,
} from "../store/contexts/UiContext/UiContext";
import { GlobalStyles } from "../styles/GlobalStyles";

export interface TestContextWrapProps {
  mockStore: CharactersContextStructure;
  children: JSX.Element | JSX.Element[];
  mockUiStore: UiContextStructure;
}

export const TestContextWrap = ({
  children,
  mockStore,
  mockUiStore,
}: TestContextWrapProps): JSX.Element => {
  return (
    <CharactersContext.Provider value={mockStore}>
      <UiContext.Provider value={mockUiStore}>
        <GlobalStyles />
        {children}
      </UiContext.Provider>
    </CharactersContext.Provider>
  );
};
