import { useContext, useEffect } from "react";
import { useReceiveCharactersData } from "./hooks/useReciveCharactersData/useReceiveCharactersData";
import HeaderStyle from "./components/Header/Header";
import CharactersContext from "./store/contexts/characters/CharactersContext";
import Characters from "./components/Characters/Characters";

const App = (): JSX.Element => {
  const { getRickApiData } = useReceiveCharactersData();

  useEffect(() => {
    getRickApiData();
  }, [getRickApiData]);

  const {
    characters: { results },
  } = useContext(CharactersContext);

  return (
    <>
      <div className="container">
        <HeaderStyle />
        {results ? <Characters results={results}></Characters> : "loading"}
      </div>
    </>
  );
};

export default App;
