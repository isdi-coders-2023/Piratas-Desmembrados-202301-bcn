import CharactersContext, {
  CharactersContextStructure,
} from "../store/contexts/characters/CharactersContext";

export interface TestContextWrapperProps {
  mockStore: CharactersContextStructure;
  children: JSX.Element | JSX.Element[];
}

export const TestContextWrapper = ({
  children,
  mockStore,
}: TestContextWrapperProps): JSX.Element => {
  return (
    <CharactersContext.Provider value={mockStore}>
      {children}
    </CharactersContext.Provider>
  );
};
