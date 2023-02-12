import { NavLink } from "react-router-dom";
import RightNavStyled from "./RightNavStyled";

export interface RightNavProp {
  isOpen: boolean;
}

const RightNav = ({ isOpen }: RightNavProp): JSX.Element => {
  return (
    <RightNavStyled isOpen={isOpen}>
      <li>
        <NavLink to="/"> Characters </NavLink>
      </li>
      <li>
        <NavLink to="mycharacters"> My characters </NavLink>
      </li>
      <li>
        <NavLink to="createcharacter"> Create Character </NavLink>
      </li>
    </RightNavStyled>
  );
};

export default RightNav;
