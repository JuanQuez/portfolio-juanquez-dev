import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BackgroundSong from "/assets/audio/general-song/jupiter-song.mp3";
import HoverSound from "/assets/audio/buttons-sounds/hover-selection-arcade.mp3";
import ClickSound from "/assets/audio/buttons-sounds/active-selection-arcade.mp3";

const Song = styled.div`
  display: none;
`;

const Soundtrack = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <Song>
      <audio ref={audioRef} autoPlay loop>
        <source src={BackgroundSong} type="audio/mp3" />
        Your browser not support the audio element of this page
      </audio>
    </Song>
  );
};

export const playClickSound = () => {
  const audio = new Audio(ClickSound);
  audio.load();
  audio.volume = 0.7;
  audio.play();
};

export const playHoverSound = () => {
  const audio = new Audio(HoverSound);
  audio.load();
  audio.volume = 0.5;
  audio.play();
};

export default Soundtrack;
