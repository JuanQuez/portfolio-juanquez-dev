import React, { useEffect } from "react";
import styled from "styled-components";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// GOBACK HOME BUTTOTN COMPONENT
import GoBack from "../../global-components/go-back-button/GoBack";
import PictureDev from "/assets/image/about-me-image/juanquez-neon-effect-2.webp";

const AboutMe = () => {
  useEffect(() => {
    const containerText = document.getElementById("writingText");

    const textDocument = `Juan Bohórquez, más conocido como Juan Quez, es un apasionado
    desarrollador colombiano de 20 años que se destaca por su enfoque
    proactivo y su fascinación por el liderazgo dentro de equipos de
    trabajo. Su destreza ha sido fundamental para fomentar la
    colaboración y la eficiencia en proyectos de desarrollo.
    
    Intrigado por el funcionamiento interno de las cosas, Juan se
    considera a sí mismo un eterno investigador, siempre en busca de
    comprender el por qué detrás de cada aspecto tecnológico. Esta
    curiosidad innata no solo lo impulsa a mantenerse informado sobre
    las últimas tendencias, sino también a anticipar y adaptarse a los
    cambios en el dinámico mundo del desarrollo de software.
    
    A diferencia de simplemente diseñar o concebir ideas, la
    pasión de Juan radica en la creación de experiencias auténticas y en
    proponer conceptos que nacen de la imaginación. Él cree firmemente
    en ir más allá de lo convencional, explorando nuevas posibilidades y
    desafiando los límites de la creatividad.`;

    setTimeout(() => {
      if (!containerText.textContent) {
        function typeWritingText(element, text, i = 0) {
          element.textContent += text[i];

          if (i === textDocument.length - 1) return;

          setTimeout(
            () => typeWritingText(containerText, textDocument, i + 1),
            10
          );
        }

        typeWritingText(containerText, textDocument);
      }
    }, 1500);
  }, []);
  return (
    <AboutMeBox>
      <GoBack />
      <div className="main_content-box">
        <div className="picture_box">
          <img src={PictureDev} alt="juanquez-picture" />
        </div>
        <div className="text_box">
          <h3>¿quien es juan quez?</h3>
          <p id="writingText"></p>
        </div>
      </div>
    </AboutMeBox>
  );
};

export default TransitionRoute(AboutMe);

//? <-- COMPONENT STYLES --> //
const AboutMeBox = styled.section`
  height: 100dvh;
  width: 100dvw;
  justify-content: center;
  align-items: center;
  animation: var(--animation-text-in) 0.5s linear 1.1s forwards;
  opacity: 0;

  &,
  .text_box,
  .picture_box {
    display: flex;
  }

  .main_content-box {
    height: min-content;
    width: 100%;
    max-width: 140rem;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    grid-gap: 1rem;
    padding: 0 5%;

    .text_box {
      flex-direction: column;
      gap: 1.5rem;
      
      h3 {
        font-size: clamp(2.4rem, 3.95vw, 5rem);
        text-align: center;
        -webkit-text-stroke-width: 0.01rem;
        -webkit-text-stroke-color: var(--color-white);
        color: var(--color-secondary);
      }
      
      p {
        height: clamp(15rem, 25vw, 31rem);
        font-size: clamp(1.1rem, 1.7vw, 2.45rem);
        text-align: justify;
        align-self: start;
        color: var(--color-white);
      }
    }

    .picture_box {
      justify-content: start;
      

      img {
        height: clamp(21rem, 35vw, 50rem);
        mask-image: radial-gradient(
            ellipse 90% 70% at 55% 45%, 
            black 10%,
            transparent 65%
          );
          
      }
    }
  }

  //* <-- RESPONSIVE DESING --> //
  //? devices screen <= 1000px //
  @media (width <= 1000px) {
    .main_content-box {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      place-items: center;

      .text_box {
        width: 40rem;
      }

      .picture_box {
        justify-content: center;
      }
    }
  }

  //? devices screen <= 768px //
  @media (width <= 768px) {
    .main_content-box {
      .text_box {
        width: 100%;

        h3 {
          font-size: clamp(1.5rem, 4vw, 5rem);
        }

        p {
          overflow-y: auto;
          font-size: clamp(1.3rem, 1vw, 1.1rem);
        }
      }

      .picture_box img {
        height: clamp(18rem, 35vw, 50rem);
      }
    }
  }
`;
