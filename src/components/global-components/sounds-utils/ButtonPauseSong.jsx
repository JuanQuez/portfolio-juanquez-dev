import React, { useState } from "react";
import {  playHoverSound } from "./Soundtrack";
import IconSongOn from "/public/assets/svg/header-svg/navbar-svg/sound-on-music.svg";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

const ButtonPauseSong = ({audioRef}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <BtnBox>
      <a>
        <ReactSVG
          className="icon_song"
          onMouseEnter={playHoverSound}
          onClick={togglePlayPause}
          src={IconSongOn}
        />
      </a>
    </BtnBox>
  );
};

export default ButtonPauseSong;

const BtnBox = styled.div`
  .icon_song {
    width: clamp(2rem, 2vw, 3.1rem);
    color: var(--color-white);
  }
`;