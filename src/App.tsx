import { GlobalStyles } from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="container" data-testid="AppContainer"></div>
    </>
  );
};

export default App;
