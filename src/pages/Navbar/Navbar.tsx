import { Burger } from "../../components/Burger/Burger";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <div className="logo"></div>
      <Burger />
    </NavbarStyled>
  );
};

export default Navbar;
