import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// IMPORT CDN SWIPER LIBRARY: https://swiperjs.com/
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
// IMPORT DATA JSON
import projectData from "/src/data/projects-data/project.json";
// IMPORT RESOURCES
import ArrowNext from "/public/assets/svg/project-svg/arrow-pixel-next.svg";
import ArrowPrev from "/public/assets/svg/project-svg/arrow-pixel-prev.svg";
// IMPORT SOUNDTRACKS
import {
  playClickSound,
  playHoverSound,
} from "../../global-components/sounds-utils/Soundtrack";
// GOBACK HOME BUTTOTN COMPONENT
import GoBack from "../../global-components/go-back-button/GoBack";
// CUSTOM BUTTON COMPUONENT
import ButtonPixelArt from "../../global-components/button-style/ButtonPixel";

const Project = () => {
  return (
    <ProjectsBox>
      <div className="main_projects_box">
        <GoBack />
        <swiper-container
          class="mySwiper"
          effect="coverflow"
          coverflow-effect-rotate="15"
          coverflow-effect-stretch="50"
          coverflow-effect-modifier="1"
          centered-slides="true"
          initial-slide="0"
          keyboard="true"
          mousewheel="false"
          loop="true"
          navigation-next-el=".custom_next_btn"
          navigation-prev-el=".custom_prev_btn"
          pagination="enabled"
          breakpoints={JSON.stringify({
            799: {
              slidesPerView: 1,
              pagination: true,
            },

            800: {
              slidesPerView: 2,
              pagination: false,
            },

            1024: {
              slidesPerView: 2,
              pagination: false,
            },

            2000: {
              slidesPerView: 3,
              pagination: false,
            },
          })}
        >
          <swiper-slide>
            <div className="main_slide_box">
              <h3>bienvenido</h3>
              <p>
                En esta sección, encontrarás una selección de mis proyectos más
                destacados, donde he aplicado
                diversas tecnologías, habilidades para resolver problemas y
                crear soluciones innovadoras. Cada proyecto incluye una
                descripción detallada, las tecnologías utilizadas y el enlace al
                proyecto. Exploralos para conocer más sobre mi trabajo y el
                proceso de desarrollo detrás de cada uno de ellos.
              </p>
            </div>
          </swiper-slide>
          {projectData.map((projectData, index) => (
            <swiper-slide key={index}>
              <img src={projectData.background} alt="background" />
              <div className="slide_box">
                <h3>{projectData.title}</h3>
                <div className="tech_box">
                  {projectData.technologies.map((tech, techIndex) => (
                    <ReactSVG key={techIndex} src={tech} />
                  ))}
                </div>
                <p>{projectData.description}</p>
                <a
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  target="_blank"
                  href={projectData.urlRef}
                >
                  <ButtonPixelArt $fontSizeProp={"clamp(.7rem, .9vw, 1.5rem)"}>
                    {projectData.status}
                  </ButtonPixelArt>
                </a>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
        <ReactSVG
          className="icon-btn custom_prev_btn"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          src={ArrowPrev}
        />
        <ReactSVG
          className="icon-btn custom_next_btn"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          src={ArrowNext}
        />
      </div>
    </ProjectsBox>
  );
};

export default TransitionRoute(Project);

//? <-- COMPONENT STYLES --> //
const ProjectsBox = styled.section`
  .main_projects_box {
    height: 100dvh;
    width: 100dvw;
    opacity: 0;
    animation: var(--animation-text-in) 0.5s alternate 1.1s forwards;
    display: grid;
    place-items: center;
    place-content: center;

    swiper-container {
      /* custom properties swiper pagination */
      --swiper-pagination-color: var(--color-secondary);
      --swiper-pagination-bullet-inactive-color: var(--color-shade-primary-2);
      --swiper-pagination-bullet-inactive-opacity: 0.3;
      --swiper-pagination-bullet-horizontal-gap: 0.3rem;
      --swiper-pagination-bullet-border-radius: none;

      &,
      .main_slide_box,
      img,
      .slide_box {
        width: 100%;
      }

      .main_slide_box,
      .slide_box,
      .tech_box {
        gap: 1rem;
      }

      .main_slide_box,
      img,
      .slide_box {
        height: 100%;
        width: 100%;
      }

      .main_slide_box,
      .slide_box,
      .tech_box {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .main_slide_box,
      .slide_box {
        padding: 4rem;
      }

      .main_slide_box,
      h3 {
        text-align: center;
      }

      .main_slide_box,
      .slide_box {
        flex-direction: column;
      }

      h3,
      p {
        text-align: justify;
      }

      h3 {
        -webkit-text-stroke-width: 0.01rem;
        -webkit-text-stroke-color: var(--color-white);
        color: var(--color-secondary);
      }

      p,
      svg {
        color: var(--color-white);
      }

      p {
        overflow-y: auto;
      }

      .main_slide_box {
        background: var(--texture-main-slide) center/cover no-repeat;

        h3 {
          font-size: clamp(3rem, 4vw, 4.5rem);
        }

        p {
          font-size: clamp(1.3rem, 1.5vw, 2rem);
        }
      }

      .swiper-slide-active,
      swiper-slide:not(.swiper-slide-active) {
        transition: ease;
      }

      .swiper-slide-active {
        box-shadow: inset 0.1rem 0.1rem var(--color-secondary);
        border-right: 0.2rem solid black;
        border-bottom: 0.2rem solid black;
      }

      swiper-slide {
        height: 35rem;
        padding: 0.1rem;
        position: relative;

        img {
          z-index: -1;
          object-fit: cover;
          position: absolute;
        }

        &:not(.swiper-slide-active) {
          filter: blur(0.7rem) grayscale() opacity(0.7);
          background: transparent;
          box-shadow: none;
        }

        .tech_box {
          flex-wrap: wrap;

          svg {
            width: clamp(1.5rem, 2vw, 2.2rem);
          }
        }

        h3 {
          font-size: clamp(1.8rem, 2vw, 2.5rem);
        }

        p {
          font-size: clamp(1.15rem, 1.25vw, 1.8rem);
          margin-bottom: 0.5rem;
        }
      }
    }

    .icon-btn {
      z-index: 1;
      width: 10rem;
      scale: 0.9;
      position: absolute;
      cursor: var(--cursor-pointer), pointer;
      animation: blinkDefault 0.5s alternate infinite;

      @keyframes blinkDefault {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0.5;
        }
      }

      &:hover {
        animation: none;
        scale: 1;
      }

      &:active {
        scale: 0.9;
      }
    }

    .custom_prev_btn {
      left: 15%;
    }

    .custom_next_btn {
      right: 15%;
    }

    //* <-- RESPONSIVE DESING --> //
    //? devices screen <= 1024px //
    @media (width <= 1024px) {
      .icon-btn {
        width: 7.5rem;
      }
    }

    //? devices screen <= 1550px //
    @media (width <= 1550px) {
      .custom_prev_btn {
        left: 12%;
      }

      .custom_next_btn {
        right: 12%;
      }
    }

    //? devices screen <= 1200px //
    @media (width <= 1200px) {
      .custom_prev_btn {
        left: 10%;
      }

      .custom_next_btn {
        right: 10%;
      }
    }

    //? devices screen <= 640px //
    @media (width <= 800px) {
      .icon-btn {
        display: none;
      }
    }
  }
`;
