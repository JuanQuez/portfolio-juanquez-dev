import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import GoBackIcon from "/public/assets/svg/global/goback-home/back-page.svg";
import {
  playClickSound,
  playHoverSound,
} from "../../global-components/sounds-utils/Soundtrack";

const ButtonGoBack = styled.div`
  a {
    position: fixed;
    top: 5%;
    left: 2%;

    svg {
      width: clamp(2.8rem, 3.5vw, 4.8rem);
      height: auto;
      color: var(--color-white);
      background: transparent;
      animation: blinkArrow 0.6s infinite alternate;

      &:hover {
        animation: none;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes blinkArrow {
      from {
        opacity: 1;
      }

      to {
        opacity: 0.2;
      }
    }
  }

  //* <-- RESPONSIVE DESING --> //
  //? devices screen <= 500px //
  @media (width <= 500px) {
    a {
      top: 3%;
      left: 4%;
    }
  }
`;

const GoBack = () => {
  return (
    <ButtonGoBack>
      <Link to={"/"} onMouseEnter={playHoverSound} onClick={playClickSound}>
        <ReactSVG src={GoBackIcon} alt="icon-go-back" />
      </Link>
    </ButtonGoBack>
  );
};

export default GoBack;
