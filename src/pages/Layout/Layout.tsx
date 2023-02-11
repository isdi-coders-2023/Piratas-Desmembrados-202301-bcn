import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      x
    </>
  );
};

export default Layout;
