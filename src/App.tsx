import { useEffect } from "react";
import { useReceiveCharactersData } from "./hooks/useReciveCharactersData/useReceiveCharactersData";
import HeaderStyle from "./components/Header/Header";
import Character from "./components/Character/Character";

const App = (): JSX.Element => {
  const { getCharactersData } = useReceiveCharactersData();

  useEffect(() => {
    (async () => getCharactersData())();
  }, [getCharactersData]);

  return (
    <>
      <div className="container">
        <HeaderStyle />
        <Character></Character>
      </div>
    </>
  );
};

export default App;
