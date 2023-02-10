import RightNavStyled from "./RightNavStyled";

export interface RightNavProp {
  isOpen: boolean;
}

const RightNav = ({ isOpen }: RightNavProp): JSX.Element => {
  return (
    <RightNavStyled isOpen={isOpen}>
      <li>Characters</li>
      <li>My characters</li>
      <li>Create characters</li>
    </RightNavStyled>
  );
};

export default RightNav;
