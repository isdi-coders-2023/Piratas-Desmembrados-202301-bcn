import { useState } from "react";
import RightNav from "../RightNav/RightNav";
import { BurgerStyled } from "./BurgerStyled";

export const Burger = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const changeBurgerState = () => {
    setOpen(!open);
  };

  return (
    <>
      <BurgerStyled
        role="burger"
        aria-label="Navigation menu"
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
