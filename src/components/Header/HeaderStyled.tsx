import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 10px;
  width: 100vw;
  background-color: white;

  .header__logo-img {
    rotate: 34deg;
  }
`;

export default HeaderStyle;
