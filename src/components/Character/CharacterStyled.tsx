import styled from "styled-components";

const CharacterCard = styled.div`
  font-family: "Source Code Pro", sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;

  .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: absolute;
    width: 300px;
    height: 400px;

    &__header {
      display: grid;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 300px;
      height: 65px;
      padding: 5px;
      border-radius: 12px 12px 0 0;
      background-color: #feeb70;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      font-weight: bold;

      & span {
        font-size: 25px;
        grid-column: 1/2;
      }

      & img {
        grid-column: 2/3;
      }
    }

    &__resumed-info {
      display: flex;
      flex-wrap: wrap;
      height: 150px;
      width: 300px;
      background-color: #feeb70;
    }

    &__origin {
      width: 300px;
      display: grid;
      grid-template-columns: 150px 150px;
      align-items: center;
      justify-items: center;
      font-size: 18px;

      & span {
        font-weight: 600;
        grid-column: 2/3;
      }

      & span:first-child {
        font-weight: 700;
        grid-column: 1/2;
        font-size: 25px;
      }

      & > :nth-child(n) {
        text-align: center;
      }
    }

    &__specie {
      width: 300px;
      display: grid;
      grid-template-columns: 150px 150px;
      align-items: center;
      justify-items: center;
      font-size: 18px;

      & span {
        font-weight: 600;
        grid-column: 2/3;
      }

      & span:first-child {
        font-weight: 700;
        grid-column: 1/2;
        font-size: 25px;
      }
    }
  }
`;

export default CharacterCard;
