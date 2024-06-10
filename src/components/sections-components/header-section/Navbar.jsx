import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import InstagramIcon from "/public/assets/svg/header-svg/navbar-svg/instagram_static_pixel_icon_juan_quez.svg";
import InstagramIconFrame from "/public/assets/svg/header-svg/navbar-svg/instagram_hover_pixel_icon_juan_quez.svg";
import IconMenu from "/public/assets/svg/header-svg/navbar-svg/Interface-Essential-Navigation-Menu-3--Streamline-Pixel.svg";
import {
  playClickSound,
  playHoverSound,
} from "../../global-components/sounds-utils/Soundtrack";

const Navbar = () => {
  return (
    <NavbarBox>
      <span className="icon_logo">quez</span>
      <nav>
        <label htmlFor="btn_menu_nav">
          <ReactSVG
            className="icon_menu"
            src={IconMenu}
            onClick={playClickSound}
          />
        </label>

        <input className="btn_menu_nav" type="checkbox" id="btn_menu_nav" />

        <ul className="link_nav_box">
          <li>
            <Link
              className="link_nav"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              to="/about-me"
            >
              sobre mi
            </Link>
          </li>
          <li>
            <Link
              className="link_nav"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              to="/skills"
            >
              habilidades
            </Link>
          </li>
          <li>
            <Link
              className="link_nav"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              to="/projects"
            >
              proyectos
            </Link>
          </li>
          <li>
            <Link
              className="link_nav"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              to="/reviews"
            >
              reseñas
            </Link>
          </li>
          <li>
            <Link
              className="link_nav"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              to="/contact"
            >
              contacto
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juan_cho.jpg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG
                className="icon_instagram"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                src={InstagramIcon}
              />
            </a>
          </li>
        </ul>
      </nav>
    </NavbarBox>
  );
};

export default Navbar;

//? STYLES COMPONENT //
const NavbarBox = styled.section`
  height: 7rem;
  min-height: 5rem;
  max-height: 8rem;
  justify-content: space-between;
  align-items: center;

  &,
  .link_nav_box {
    display: flex;
    gap: 2rem;
  }

  .btn_menu_nav,
  .icon_menu {
    display: none;
  }

  .icon_logo,
  .link_nav {
    text-transform: uppercase;
    color: var(--color-white);
  }

  .icon_logo {
    font-size: clamp(1.3rem, 1.8vw, 1.8rem);
  }

  .link_nav_box {
    align-items: center;

    .link_nav {
      font-size: clamp(0.9rem, 1vw, 1.2rem);
      padding: 0.2rem;
      white-space: nowrap;

      &:hover {
        text-shadow: 2px 2px var(--color-primary),
          -1px -1px var(--color-primary), 0 -1px var(--color-primary),
          0 2px var(--color-primary), 2px 0 var(--color-primary),
          -1px 0 var(--color-primary), 1px 1px var(--color-primary);

        animation: blinkAnimation 0.3s infinite;

        @keyframes blinkAnimation {
          0% {
            background: transparent;
            box-shadow: 5px 0px 0px transparent, -5px 0px 0px transparent,
              0px 5px 0px transparent, 0px -5px 0px transparent;
          }
          50% {
            background: var(--color-secondary);
            box-shadow: 5px 0px 0px var(--color-secondary),
              -5px 0px 0px var(--color-secondary),
              0px 5px 0px var(--color-secondary),
              0px -5px 0px var(--color-secondary);
          }
          100% {
            background: transparent;
            box-shadow: 5px 0px 0px transparent, -5px 0px 0px transparent,
              0px 5px 0px transparent, 0px -5px 0px transparent;
          }
        }
      }
    }
  }

  .icon_instagram {
    width: clamp(2.1rem, 2.8vw, 3.1rem);
    &:hover {
      scale: 1.05;
    }
  }

  .icon_instagram:hover {
    content: url(${InstagramIconFrame});
  }

  //* <-- RESPONSIVE DESING --> //

  //? devices screen <= 900px //
  @media (width <= 900px) {
    .link_nav_box {
      position: absolute;
      top: 100%;
      right: 0;
      width: 18.75rem;
      height: 30rem;
      display: none;
      z-index: 3;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;

      background: var(--texture-wall) no-repeat;
      background-size: cover;
      box-shadow: 5px 0px 0px var(--color-shade-primary),
        -5px 0px 0px var(--color-shade-primary),
        0px 5px 0px var(--color-shade-primary),
        0px -5px 0px var(--color-shade-primary);

      .link_nav {
        display: flex;
        justify-content: center;
        width: 10rem;
        background: var(--color-shade-primary);
        box-shadow: 5px 0px 0px var(--color-shade-primary),
          -5px 0px 0px var(--color-shade-primary),
          0px 5px 0px var(--color-shade-primary),
          0px -5px 0px var(--color-shade-primary);
        text-shadow: 2px 2px var(--color-primary),
          -1px -1px var(--color-primary), 0 -1px var(--color-primary),
          0 2px var(--color-primary), 2px 0 var(--color-primary),
          -1px 0 var(--color-primary), 1px 1px var(--color-primary);
      }
    }

    .link_nav_box::after {
      content: "";
      position: absolute;
      background: var(--color-primary);
      z-index: -1;
      opacity: 0.7;
      height: 100%;
      width: 100%;
    }

    .icon_menu {
      display: inline-block;
      width: 2.1rem;
      color: var(--color-white);
    }

    .btn_menu_nav:checked + .link_nav_box {
      display: flex;
    }
  }
`;
