import { useEffect } from "react";
import { useReciveCharactersData } from "./hooks/useReciveCharactersData/useReciveCharactersData";
import HeaderStyle from "./components/Header/Header";

const App = (): JSX.Element => {
  const { getCharactersData } = useReciveCharactersData();

  useEffect(() => {
    getCharactersData();
  });

  return (
    <>
      <div className="container">
        <HeaderStyle />
      </div>
    </>
  );
};

export default App;
