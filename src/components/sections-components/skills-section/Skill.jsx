import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
// FRAMER MOTION ANIMATION
import TransitionRoute from "../../global-components/route-transition/TransitionRoute";
// IMPORT SKILLS INFORMATION
import skillData from "/src/data/skills-data/skill.json";
// GOBACK BUTTON COMPONENT
import GoBack from "../../global-components/go-back-button/GoBack";
// IMPORT STATIC RESOURCES
import minimizeIcon from "/public/assets/svg/skill-svg/window-folder/minimize-pixel.svg";
import MaximizeIcon from "/public/assets/svg/skill-svg/window-folder/maximize-pixel.svg";
import CloseIcon from "/public/assets/svg/skill-svg/window-folder/close-pixel.svg";
import FolderIcon from "/public/assets/svg/skill-svg/window-folder/folder-pixel.svg";
import UpArrowIcon from "/public/assets/svg/skill-svg/window-folder/corner-left-up.svg";
import GoArrowIcon from "/public/assets/svg/skill-svg/window-folder/corner-down-right.svg";
import ScrollArrowUp from "/public/assets/svg/skill-svg/window-folder/up-arrow.svg";
import ScrollArrowDown from "/public/assets/svg/skill-svg/window-folder/down-arrow.svg";

const Skill = () => {
  return (
    <SkillsBox>
      <GoBack />
      <div className="main_skills_box">
        {skillData.map((skillData, index) => (
          <div className="window_retro_box" key={index}>
            <div className="head_window">
              <div className="title_box">
                <ReactSVG className="folder_icon icon" src={FolderIcon} />
                <h3>{skillData.skillTitle}</h3>
              </div>
              <div className="window_icons_box">
                <ReactSVG className="window_icon icon" src={minimizeIcon} />
                <ReactSVG className="window_icon icon" src={MaximizeIcon} />
                <ReactSVG className="window_icon icon" src={CloseIcon} />
              </div>
            </div>
            <ul className="options_box">
              <li>file</li>
              <li>edit</li>
              <li>view</li>
              <li>help</li>
            </ul>
            <div className="search_bar_box">
              <ReactSVG className="arrow_icon icon" src={UpArrowIcon} />
              <div className="search_bar">
                <p>C:/JuanQuez/{skillData.skillTitle}</p>
              </div>
              <ReactSVG className="arrow_icon icon" src={GoArrowIcon} />
            </div>
            <div className="window_body_box">
              {skillData.item.map((item, i) => (
                <div className="item_box" key={i}>
                  <ReactSVG className="item icon" src={item.logo} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="footer_window">
              <div className="object_box">
                <p>{skillData.item.length} items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkillsBox>
  );
};

export default TransitionRoute(Skill);

//? <-- COMPONENT STYLES --> //
const SkillsBox = styled.section`
  .main_skills_box {
    height: 100dvh;
    width: 100dvw;
    justify-content: center;
    padding: 4% 7%;
    gap: 8rem;

    &,
    .window_retro_box,
    .head_window,
    .title_box,
    .window_icons_box,
    .search_bar_box,
    .options_box,
    .search_bar,
    .item_box,
    .object_box,
    .icon div {
      display: flex;
    }

    &,
    .head_window,
    .window_icons_box,
    .title_box,
    .search_bar,
    .item_box,
    .object_box {
      align-items: center;
    }

    .window_retro_box {
      width: 100%;
      flex: 1;
      opacity: 0;
      box-shadow: 0.2rem 0 black, 0 0.2rem black,
        inset 0.2rem 0.2rem 0.1rem var(--color-secondary);
      overflow: hidden;
      animation: var(--animation-text-in) 0.5s alternate 1.1s forwards;

      &,
      .icon_arrow,
      .window_body_box {
        height: 100%;
      }

      &,
      .window_icon {
        background: var(--color-shade-primary);
      }

      &,
      .item_box {
        flex-direction: column;
      }

      .window_icon,
      .arrow_icon,
      .folder_icon,
      li,
      h3,
      p {
        color: var(--color-secondary);
      }

      .head_window,
      .search_bar_box,
      .window_body_box {
        justify-content: space-between;
      }

      .head_window,
      .title_box,
      .window_icons_box {
        margin: 0.5rem;
      }

      li,
      .item_box p {
        text-transform: capitalize;
      }

      .head_window,
      ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
      }

      .head_window,
      .search_bar_box {
        height: 3rem;
      }

      .head_window h3,
      .search_bar p,
      .object_box p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .icon {
        width: 1.5rem;
      }

      .title_box {
        gap: 0.5rem;

        h3 {
          font-size: clamp(0.8rem, 1vw, 2.5rem);
        }
      }

      .window_icon {
        margin: 0.15rem;
        padding: 0.1rem;
        box-shadow: 0.1rem 0.1rem black,
          0.1rem 0.1rem inset var(--color-secondary);
      }

      .options_box {
        gap: 1.5rem;
        margin: 0 1rem 0.7rem;

        li {
          font-size: clamp(0.7rem, 0.9vw, 1rem);
          background: linear-gradient(
              to right,
              var(--color-secondary) 50%,
              transparent 50%
            )
            no-repeat;
          background-position: 0 100%;
          background-size: 100% 1px;
        }
      }

      .search_bar,
      .window_body_box {
        background: var(--color-shade-primary-2);
      }

      .search_bar p,
      .object_box p {
        font-size: clamp(0.8rem, 1vw, 1rem);
      }

      p {
        font-family: var(--font-subtitle-2);
      }

      .search_bar_box {
        margin: 0 1em;

        .arrow_icon {
          width: 2.2rem;
          padding: 0.4rem;
          box-shadow: 0.1rem 0.1rem black,
            0.1rem 0.1rem inset var(--color-secondary);
        }

        .search_bar {
          width: 100%;
          height: 100%;
          padding: 0 1rem;

          box-shadow: inset 0.1rem 0.1em black,
            0.1em 0.1em var(--color-secondary);
        }
      }

      .window_body_box {
        display: grid;
        grid-template-columns: repeat(auto-fit, 8rem);
        overflow: auto;
        margin: 1rem;
        padding: 2rem;
        gap: 2rem;

        box-shadow: 0.15rem 0.15rem var(--color-secondary);
        border-right: 0.3rem solid var(--color-shade-primary);
        border-bottom: 0.3rem solid var(--color-shade-primary);
        border-left: 0.15rem solid black;
        border-top: 0.15rem solid black;

        .item_box {
          gap: 1em;
          opacity: 0;
          animation: var(--animation-text-in) 0.5s linear 2s forwards;

          .item {
            width: clamp(4rem, 5vw, 5.2rem);
            color: var(--color-primary);
          }

          p {
            width: fit-content;
            text-align: center;
            font-size: clamp(0.85rem, 0.95vw, 1.2rem);
            color: var(--color-white);
          }
        }
      }

      .footer_window {
        margin: 1rem;

        .object_box {
          height: 2rem;
          padding: 1rem;
          background-color: var(--color-shade-primary-2);

          box-shadow: 0.1rem 0.1rem inset black,
            0.1rem 0.1rem 0.1rem 0.1rem var(--color-secondary);
          border-bottom: 0.2rem solid var(--color-shade-primary);
          border-right: 0.2rem solid var(--color-shade-primary);
        }
      }

      // Custom window scrollbar
      ::-webkit-scrollbar {
        width: 1.5rem;
      }

      ::-webkit-scrollbar-track,
      ::-webkit-scrollbar-thumb {
        border-left: 0.15rem solid black;
      }

      ::-webkit-scrollbar-track {
        background: var(--color-shade-primary);
      }

      ::-webkit-scrollbar-thumb {
        width: 0.5rem;
      }

      /* scrollbar buttons */
      ::-webkit-scrollbar-button:single-button {
        display: block;
        height: 1.5rem;
        border-left: 0.15rem solid black;
      }

      /* Up */
      ::-webkit-scrollbar-button:single-button:vertical:decrement {
        background: url(${ScrollArrowUp}) center/cover no-repeat
          var(--color-shade-primary);
        border-bottom: 0.15rem solid black;
      }

      /* Down */
      ::-webkit-scrollbar-button:single-button:vertical:increment {
        background: url(${ScrollArrowDown}) center/cover no-repeat;
        border-top: 0.15rem solid black;
      }
    }
  }

  //* <-- RESPONSIVE DESING --> //
  //? devices screen <= 1115px //
  @media (width <= 1115px) {
    .main_skills_box {
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  //? devices screen <= 500px //
  @media (width <= 500px) {
    .main_skills_box .window_retro_box .window_body_box {
      grid-template-columns: repeat(auto-fit, 5rem);
    }
  }
`;
