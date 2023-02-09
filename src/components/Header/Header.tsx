import DropdownStyle from "../Dropdown/DropdownStyled";
import HeaderStyle from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyle>
      <img
        src="img/title-gun.png"
        alt="page logo"
        width="64"
        height="25"
        className="header__logo-img"
      />
      <img
        src="img/rick-morty-name.webp"
        alt="rick and morty name"
        width="160"
        height="54"
      />
      <DropdownStyle />
    </HeaderStyle>
  );
};

export default Header;
