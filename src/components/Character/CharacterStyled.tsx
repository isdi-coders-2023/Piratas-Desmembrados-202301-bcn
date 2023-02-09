import styled from "styled-components";

const CharacterCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: #ff9d9d;
  border-radius: 12px;
  overflow: hidden;
  font-family: "Source Code Pro", sans-serif;

  .card {
    &__header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      width: 300px;
      height: 62px;
      background-color: #feeb70;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      font-family: "Source Code Pro", sans-serif;
      font-weight: bold;

      & span {
        font-size: 25px;
      }
    }

    &__resumed-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-around;
      align-items: center;
      background-color: #feeb70;
    }

    &__origin {
      display: flex;
      gap: 50px;

      & span {
        font-weight: 600;
      }

      & span:first-child {
        font-weight: bold;
      }

      & > :nth-child(n) {
        display: inline-block;
        font-size: 25px;
      }
    }

    &__specie {
      display: flex;
      gap: 50px;

      & span {
        font-weight: 600;
      }

      & span:first-child {
        font-weight: 700;
      }

      & > :nth-child(n) {
        display: inline-block;
        font-size: 25px;
      }
    }
  }
`;

export default CharacterCard;
