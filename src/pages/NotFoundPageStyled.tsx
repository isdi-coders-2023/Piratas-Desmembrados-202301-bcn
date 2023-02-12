import styled from "styled-components";

const NotfoundpageStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 0;
  background-image: url("img/404-background-image.webp");

  .page-not-found__background-img {
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-size: cover;
  }

  .page-not-found__status-code {
    font-size: 150px;
    margin-top: 17px;
    color: white;

    text-shadow: -1px -1px 3px #82c64e, 0 0 1px #82c64e, 1px 1px 1px #82c64e,
      2px 2px 1px #82c64e, 3px 3px 1px #82c64e, 4px 4px 1px #82c64e;
  }

  .page-not-found__message {
    display: flex;
    width: 255px;
    height: 190px;
    color: #00b0c8;
    -webkit-text-stroke: 2px black;
    border: 1px solid black;
    text-shadow: 3px 4px 8px #00b0c8, 1px 1px 3em black;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 150%;
    text-align: center;
  }

  .page-not-found__404 {
    padding-top: 20px;
  }
`;

export default NotfoundpageStyled;
