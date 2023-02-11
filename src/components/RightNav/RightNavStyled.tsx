import styled from "styled-components";

const RightNavStyled = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;

    width: 80%;
  }

  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  top: 25px;
  right: 0;
  height: 230px;
  width: 200px;
  padding-top: 2.2rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: black;
    border-bottom: 1px solid #00b0c8;
  }
`;

export default RightNavStyled;
