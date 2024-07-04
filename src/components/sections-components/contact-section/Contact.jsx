import React, { useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
// IMPORT "EMAILJS" LIBRARY - more information here: https://emailjs.com/
import emailjs from "@emailjs/browser";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// IMPORT ASSETS FILES
import LogoContact from "/assets/svg/contact-svg/logo-contact-edit.svg";
import ValidIcon from "/assets/svg/contact-svg/input-icon-pixel/mood-happy-svgrepo-com.svg";
import InvalidIcon from "/assets/svg/contact-svg/input-icon-pixel/mood-sad-svgrepo-com.svg";
import LineIcon from "/assets/svg/contact-svg/subtract.svg";
import LinkedinIcon from "/assets/svg/contact-svg/social-icon-pixel/linkedin-icon/linkedin_static_pixel_icon_juan_quez.svg";
import InstagramIcon from "/assets/svg/contact-svg/social-icon-pixel/instagram-icon/instagram_static_pixel_icon_juan_quez.svg";
import DiscordIcon from "/assets/svg/contact-svg/social-icon-pixel/discord-icon/discord_static_pixel_icon_juan_quez.svg";
// CUSTOM BUTTON COMPONENT
import ButtonPixelArt from "../../global-components/button-style/ButtonPixel";
// SOUNDTRACKS
import {
  playClickSound,
  playHoverSound,
} from "../../global-components/sounds-utils/Soundtrack";
// GOBACK HOME BUTTOTN COMPONENT
import GoBack from "../../global-components/go-back-button/GoBack";

const Contact = () => {
  const ref = useRef();

  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r1gh5x",
        "template_lvvce3l",
        ref.current,
        "Lc-NAum7t-G2cfJoU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <ContactBox>
      <div className="main_contact_box">
        <GoBack />
        <div className="form_box">
          <form ref={ref} onSubmit={sendEmail}>
            <h3>¡contactame!</h3>
            <input placeholder="nombre" name="name" type="text" required />
            <input placeholder="email" name="email" type="email" required />
            <input
              placeholder="motivo de contacto"
              name="subject"
              type="text"
            />
            <textarea
              placeholder="¡escribe tu mensaje!"
              name="message"
              rows={6}
              required
            />
            <ButtonPixelArt
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              type="submit"
              $widthProp={"100%"}
            >
              enviar
            </ButtonPixelArt>
            {success && <p>¡Recibí tu mensaje! Te responderé pronto.</p>}
          </form>
          <div className="division_box">
            <ReactSVG src={LineIcon} />
            <h4>o</h4>
            <ReactSVG src={LineIcon} />
          </div>
          <div className="social_media_box">
            <a
              href="https://www.linkedin.com/in/of-juan-quez-dev-contact-me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG
                className="linkedin_icon social_icon"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                src={LinkedinIcon}
              />
            </a>
            <a
              href="https://www.instagram.com/juan_cho.jpg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG
                className="instagram_icon social_icon"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                src={InstagramIcon}
              />
            </a>
            <a
              href="https://discord.com/users/450014118401933322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG
                className="discord_icon social_icon"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                src={DiscordIcon}
              />
            </a>
          </div>
        </div>
        <div className="picture_box">
          <ReactSVG src={LogoContact} />
        </div>
      </div>
    </ContactBox>
  );
};

export default TransitionRoute(Contact);

//? <-- COMPONENT STYLES --> //
const ContactBox = styled.section`
  .main_contact_box {
    height: 100dvh;
    width: 100dvw;
    gap: clamp(2rem, 6vw, 6rem);
    opacity: 0;
    animation: var(--animation-text-in) 0.5s linear 1.1s forwards;

    &,
    .form_box,
    form,
    .division_box,
    .social_media_box,
    .picture_box {
      display: flex;
    }

    .form_box,
    .division_box,
    .picture_box {
      align-items: center;
    }

    .form_box,
    .division_box {
      justify-content: center;
    }

    .form_box,
    .picture_box {
      flex: 1;
    }

    .form_box {
      justify-content: center;
      align-items: end;

      &,
      form {
        flex-direction: column;
      }

      form,
      .division_box,
      .social_media_box {
        width: clamp(15rem, 35vw, 45rem);
      }

      h4,
      svg,
      p {
        color: var(--color-white);
      }

      form {
        gap: 1.5rem;
        justify-content: center;

        h3 {
          font-size: clamp(1.8rem, 2.5vw, 3rem);
          -webkit-text-stroke-width: 0.01rem;
          text-align: start;
          color: var(--color-secondary);
          -webkit-text-stroke-color: var(--color-white);
        }

        p {
          text-align: center;
          font-size: clamp(1.5rem, 2vw, 2.2rem);
        }

        input,
        textarea {
          padding: 0.8rem;
          font-size: clamp(1.2rem, 1.5vw, 2rem);
          border: none;

          // Borders pixel styles
          box-shadow: inset 0 5px 0px rgba(255, 255, 255, 0.2),
            inset 5px 0px 0px rgba(255, 255, 255, 0.1),
            inset 0 -5px 0px rgba(0, 0, 0, 0.2),
            inset -5px 0px 0px rgba(0, 0, 0, 0.1),
            5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
            0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);

          &:hover {
            box-shadow: inset 0 5px 0px rgba(255, 255, 255, 0.4),
              inset 5px 0px 0px rgba(255, 255, 255, 0.3),
              inset 0 -5px 0px rgba(0, 0, 0, 0.3),
              inset -5px 0px 0px rgba(0, 0, 0, 0.2),
              5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
              0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);
          }

          &:active {
            box-shadow: inset 0 -5px 0px rgba(255, 255, 255, 0.4),
              inset -5px 0px 0px rgba(255, 255, 255, 0.3),
              inset 0 5px 0px rgba(0, 0, 0, 0.3),
              inset 5px 0px 0px rgba(0, 0, 0, 0.2),
              5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
              0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);
          }

          &:focus {
            box-shadow: inset 0 5px 0px rgba(0, 0, 0, 0.3),
              inset 5px 0px 0px rgba(0, 0, 0, 0.2),
              inset 0 -5px 0px rgba(0, 0, 0, 0.3),
              inset -5px 0px 0px rgba(0, 0, 0, 0.2),
              5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
              0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);
          }

          &:focus:invalid {
            background: url(${InvalidIcon}) no-repeat 95% 50% var(--color-white);
          }

          &:focus:required:valid {
            background: url(${ValidIcon}) no-repeat 95% 50% var(--color-white);
          }

          &:focus:invalid,
          &:focus:required:valid {
            background-size: clamp(1.4rem, 1.5vw, 2rem);
          }

          &::placeholder {
            text-transform: capitalize;
          }
        }
      }

      .division_box {
        h4 {
          font-size: clamp(1rem, 1.5vw, 1.8rem);
        }

        svg {
          width: clamp(2.8rem, 5vw, 6rem);
        }
      }

      .social_media_box {
        justify-content: space-around;

        .social_icon {
          width: clamp(2.5rem, 3.5vw, 5rem);

          &:hover {
            scale: 1.05;
          }
        }
      }
    }

    .picture_box {
      justify-content: center;

      svg {
        height: 100%;
        width: clamp(20rem, 28vw, 55rem);
      }
    }
  }

  //* <-- RESPONSIVE DESING --> //
  //? devices screen <= 850px //
  @media (width <= 850px) {
    .main_contact_box {
      .form_box {
        display: flex;
        justify-content: center;
        align-items: center;

        .social_media_box {
          justify-content: space-between;
        }
      }

      .picture_box {
        display: none;
      }

      .picture_box svg {
        display: none;
      }
    }
  }
`;
