import { useContext, useEffect } from "react";
import { useReceiveCharactersData } from "./hooks/useReciveCharactersData/useReceiveCharactersData";
import HeaderStyle from "./components/Header/Header";
import CharactersContext from "./store/contexts/characters/CharactersContext";
import Characters from "./components/Characters/Characters";

const App = (): JSX.Element => {
  const {
    characters: { results },
  } = useContext(CharactersContext);
  const { getRickApiData } = useReceiveCharactersData();

  useEffect(() => {
    (async () => getRickApiData())();
  }, [getRickApiData]);

  return (
    <>
      <div className="container">
        <HeaderStyle />
        <Characters characters={results}></Characters>
      </div>
    </>
  );
};

export default App;
