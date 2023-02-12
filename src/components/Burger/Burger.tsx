import { useState } from "react";
import RightNav from "../../pages/RightNav/RightNav";

import { BurgerStyled } from "./BurgerStyled";

export const Burger = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const changeBurgerState = () => {
    setOpen(!open);
  };

  return (
    <>
      <BurgerStyled
        role="button"
        aria-pressed="false"
        aria-label="menu"
        onClick={changeBurgerState}
        open={open}
      >
        <div />
        <div />
        <div />
      </BurgerStyled>
      <RightNav isOpen={open} />
    </>
  );
};
