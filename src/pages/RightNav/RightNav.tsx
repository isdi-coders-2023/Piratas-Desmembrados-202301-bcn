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
    </RightNavStyled>
  );
};

export default RightNav;
