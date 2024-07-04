import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// IMPORT NAVBAR SECTION
import Navbar from "./Navbar";
// IMPORT ASSETS RESOURCES
import DevPicture from "/assets/image/home-image/juanquez-neon-effect.webp";
import LogoNeon from "/assets/svg/header-svg/home-svg/logotype-neon edit.webp";
import IconContact from "/assets/svg/home-svg/icon-contact-pixel.svg";
import IconDown from "/assets/svg/home-svg/icon-donwload-pixel.svg";
// IMPORT BUTTON CUSTOM STYLE
import ButtonPixelArt from "../../global-components/button-style/ButtonPixel";
// IMPORT SOUNDS ELEMENTS
import {
  playClickSound,
  playHoverSound,
} from "../../global-components/sounds-utils/Soundtrack";

const Home = () => {
  return (
    <HomeBox>
      <Navbar />
      <div className="main_content_box">
        <div className="content_box">
          <div className="text_box">
            <h1>
              juan <br /> bohor
              <span>quez</span>
            </h1>
            <h2>full stack developer</h2>
            <p>
              Innovación, código puro de mi existencia; la línea que fortalece
              mis ideas.
            </p>
            <div className="buttons_box">
              <a href="/assets/pdf/cv-juanquez-dev.pdf" download>
                <ButtonPixelArt
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  descargar cv
                  <ReactSVG  src={IconDown} />
                </ButtonPixelArt>
              </a>
              <Link to="/contact">
                <ButtonPixelArt
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  Contactame
                  <ReactSVG  src={IconContact} />
                </ButtonPixelArt>
              </Link>
            </div>
          </div>
          <div className="picture_box">
            <img src={DevPicture} alt="picture-dev" />
            <ReactSVG src={LogoNeon} />
          </div>
        </div>
      </div>
    </HomeBox>
  );
};

export default TransitionRoute(Home);

//? <-- COMPONENT STYLES --> //
const HomeBox = styled.header`
  height: 100dvh;
  max-width: 170rem;
  margin: 0 auto;
  padding: 0 7%;
  opacity: 0;
  animation: var(--animation-text-in) 0.5s linear 1.1s forwards;

  &,
  .main_content_box,
  .text_box,
  .picture_box,
  .buttons_box {
    display: flex;
  }

  .main_content_box,
  .content_box {
    justify-content: center;
    align-items: center;
  }

  &,
  .text_box {
    flex-direction: column;
  }

  .main_content_box {
    height: 100%;

    .content_box {
      height: min-content;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8rem;

      .text_box {
        width: min-content;
        gap: 0.6rem;

        h2,
        p {
          color: var(--color-white);
        }

        h1 {
          font-size: clamp(3.5rem, 5vw, 5.5rem);
          text-transform: uppercase;
          color: var(--color-shadow-secondary-off);
          -webkit-text-stroke: 0.05rem;
          -webkit-text-stroke-color: var(--color-shadow-white-off);

          animation: var(--animation-flicker) 3s linear 2.5s forwards;

          span {
            font-family: var(--font-title);

            animation: wordFlicker 0.1s linear 6.5s 2;
            @keyframes wordFlicker {
              0% {
                color: none;
                -webkit-text-stroke-color: none;
              }

              40%,
              70%,
              100% {
                color: var(--color-shadow-secondary-off);
                -webkit-text-stroke-color: var(--color-shadow-white-off);
                text-shadow: none;
              }
            }
          }
        }

        h2 {
          font-size: clamp(2.13rem, 3.08vw, 3.34rem);
          word-spacing: -1.5rem;
          white-space: nowrap;
        }

        p {
          font-size: clamp(1.16rem, 1.5vw, 2rem);
          font-family: var(--font-text-2);
        }

        .buttons_box {
          margin-top: 1rem;
          gap: 2.5rem;

          svg {
            width: clamp(.3rem, 5vw, 1.5rem);
          }
        }
      }

      .picture_box {
        height: auto;
        position: relative;
        justify-content: end;

        img {
          width: clamp(25rem, 38vw, 55rem);
          mask-image: radial-gradient(
            ellipse at 70% 35%,
            black 10%,
            transparent 72%
          );
        }

        svg {
          top: 18%;
          left: 55%;
          width: clamp(7rem, 15vw, 23rem);
          position: absolute;

          animation: iconLevitate 3s infinite alternate ease-in;

          @keyframes iconLevitate {
            0%,
            100% {
              opacity: 0.8;
              transform: rotate(-9deg);
            }

            50% {
              opacity: 0.5;
            }

            100% {
              transform: translateY(-1rem) rotate(-9deg);
            }
          }
        }
      }
    }
  }

  //* <-- RESPONSIVE DESING --> //
  //? devices screen <= 1800px //
  @media (width <= 1800px) {
    .main_content_box .content_box .picture_box svg {
      width: clamp(7rem, 13vw, 23rem);
    }
  }

  //? devices screen <= 1280px //
  @media (width <= 1280px) {
    .main_content_box .content_box {
      grid-template-columns: 1fr;
      place-items: center;
      margin: 1rem 0;
      grid-gap: 2rem;

      .text_box {
        text-align: center;

        h2 {
          word-spacing: -0.9rem;
        }

        .buttons_box {
          justify-content: center;
          gap: 1.5rem;
        }
      }

      .picture_box {
        width: auto;

        svg {
          width: clamp(10rem, 13vw, 23rem);
        }
      }
    }
  }

  //? devices screen <= 680px //
  @media (width <= 680px) {
    .main_content_box > .content_box {
      grid-gap: 2rem;

      .picture_box img {
        width: clamp(19rem, 38vw + 10rem, 55rem);
      }

      .text_box h1 {
        font-size: clamp(2rem, 5vw + 1rem, 5.3rem);
      }

      .text_box h2 {
        font-size: clamp(1.48rem, 3.08vw + 0.6rem, 3.22rem);
        white-space: normal;
      }

      .text_box p {
        font-size: clamp(0.98rem, 1.5vw + 0.39rem, 1.63rem);
      }

      .text_box .buttons_box {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }

      .picture_box svg {
        width: clamp(9rem, 13vw, 23rem);
      }
    }
  }

//? devices screen <= 500px //
@media (width <= 500px) {
  .main_content_box .content_box .picture_box svg {
      width: clamp(7.5rem, 13vw, 23rem);
    }
}
`;
