import styled from "styled-components";

const CharacterDetailStyle = styled.div`
  width: 300px;
  height: 1180px;
  overflow: hidden;
  border-radius: 12px;
  font-size: 1.18rem;

  img {
    vertical-align: bottom;
  }

  .detail__title {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #864d0b;

    background-color: #feeb70;
    font-weight: 700;
  }
  .name {
    height: 50px;
    background-color: #fff;
  }

  .detail__info {
    border: 1px solid #864d0b;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
  }
`;
export default CharacterDetailStyle;
