import HeaderStyle from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyle>
        <img src="./public/img/title-gun.png" alt="page logo" />
        <img src="./public/img/rick-morty-name.png" alt="rick and morty name" />
        <ul>
          <li>
            <a href="">Character</a>
          </li>
          <li>
            <a href="">My characters</a>
          </li>
          <li>
            <a href="">Create Character</a>
          </li>
        </ul>
      </HeaderStyle>
    </>
  );
};

export default Header;
