import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import UiContext from "../../store/contexts/UiContext/UiContext";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
