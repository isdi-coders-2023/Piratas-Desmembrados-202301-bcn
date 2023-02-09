import HeaderStyle from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyle>
      <img
        src="img/title-gun.png"
        alt="page logo"
        width="48"
        height="28"
        className="header__logo-img"
      />
      <img
        src="img/rick-morty-name.png"
        alt="rick and morty name"
        width="171"
        height="48"
      />
    </HeaderStyle>
  );
};

export default Header;
