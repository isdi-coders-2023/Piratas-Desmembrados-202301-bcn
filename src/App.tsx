import { useEffect } from "react";
import { useReceiveCharactersData } from "./hooks/useReciveCharactersData/useReceiveCharactersData";
import HeaderStyle from "./components/Header/Header";

const App = (): JSX.Element => {
  const { getCharactersData } = useReceiveCharactersData();

  useEffect(() => {
    (async () => getCharactersData())();
  }, [getCharactersData]);

  return (
    <>
      <div className="container">
        <HeaderStyle />
      </div>
    </>
  );
};

export default App;
