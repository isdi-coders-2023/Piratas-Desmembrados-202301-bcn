import { useContext, useEffect } from "react";
import Characters from "../../components/Characters/Characters";
import { useReceiveCharactersData } from "../../hooks/useReciveCharactersData/useReceiveCharactersData";
import CharactersContext from "../../store/contexts/characters/CharactersContext";

const HomePage = (): JSX.Element => {
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
        {results && <Characters results={results}></Characters>}
      </div>
    </>
  );
};

export default HomePage;
