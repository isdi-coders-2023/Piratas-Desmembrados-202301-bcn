import styled from "styled-components";

const RightNavStyled = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: white;

  li {
    padding: 18px 10px;
  }

  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  top: 69px;
  right: 0;
  height: 187px;
  width: 100vw;
  transition: transform 0.3s ease-in-out;
  li {
    color: black;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid #00b0c8;
  }
`;

export default RightNavStyled;
