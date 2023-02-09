import CharactersContext, {
  CharactersContextStructure,
} from "../store/contexts/characters/CharactersContext";
import { GlobalStyles } from "../styles/GlobalStyles";

export interface TestContextWrapProps {
  mockStore: CharactersContextStructure;
  children: JSX.Element | JSX.Element[];
}

export const TestContextWrap = ({
  children,
  mockStore,
}: TestContextWrapProps): JSX.Element => {
  return (
    <CharactersContext.Provider value={mockStore}>
      <GlobalStyles />
      {children}
    </CharactersContext.Provider>
  );
};
