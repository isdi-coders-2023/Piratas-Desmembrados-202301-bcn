import { useEffect } from "react";
import { useReciveCharactersData } from "./hooks/useReciveCharactersData/useReciveCharactersData";

const App = (): JSX.Element => {
  const { getCharactersData } = useReciveCharactersData();

  useEffect(() => {
    (async () => getCharactersData())();
  }, [getCharactersData]);

  return <div className="container"></div>;
};

export default App;
