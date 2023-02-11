import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.56rem;
  font-weight: bold;
  padding-top: 45px;

  .loader__text {
    text-align: center;
  }

  .jelly-triangle {
    --uib-size: 44px;
    --uib-speed: 1.75s;
    --uib-color: black;
    margin: 50px 0;

    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
    filter: url("#uib-jelly-triangle-ooze");

    &__dot,
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 33%;
      height: 33%;
      background: var(--uib-color);
      border-radius: 100%;
    }

    &__dot {
      top: 6%;
      left: 30%;
      animation: grow var(--uib-speed) ease infinite;
    }

    &::before {
      bottom: 6%;
      right: 0;
      animation: grow var(--uib-speed) ease calc(var(--uib-speed) * -0.666)
        infinite;
    }

    &::after {
      bottom: 6%;
      left: 0;
      animation: grow var(--uib-speed) ease calc(var(--uib-speed) * -0.333)
        infinite;
    }

    &__traveler {
      position: absolute;
      top: 6%;
      left: 30%;
      width: 33%;
      height: 33%;
      background: var(--uib-color);
      border-radius: 100%;
      animation: triangulate var(--uib-speed) ease infinite;
    }
  }

  .jelly-maker {
    width: 0;
    height: 0;
    position: absolute;
  }

  @keyframes triangulate {
    0%,
    100% {
      transform: none;
    }

    33.333% {
      transform: translate(120%, 175%);
    }

    66.666% {
      transform: translate(-95%, 175%);
    }
  }

  @keyframes grow {
    0%,
    100% {
      transform: scale(1.5);
    }

    20%,
    70% {
      transform: none;
    }
  }
`;

export default LoaderStyled;
