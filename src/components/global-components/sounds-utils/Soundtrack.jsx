import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import HoverSound from "/assets/audio/buttons-sounds/mp3/hover-selection-arcade.mp3";
import ClickSound from "/assets/audio/buttons-sounds/mp3/active-selection-arcade.mp3";
import BackgroundSongMp3 from "/assets/audio/general-song/mp3/jupiter-song.mp3";
import BackgroundSongOgg from "/assets/audio/general-song/ogg/jupiter-song.ogg";
import BackgroundSongAac from "/assets/audio/general-song/aac/jupiter-song.aac";

const Soundtrack = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.04;
    }
  }, []);


  return (
    <SoundtrackBox>
      <audio ref={audioRef} autoPlay loop>
        <source src={BackgroundSongMp3} type="audio/mp3" />
        <source src={BackgroundSongOgg} type="audio/ogg" />
        <source src={BackgroundSongAac} type="audio/aac" />
        Your browser not support the audio element of this page
      </audio>
    </SoundtrackBox>
  );
};

export const playClickSound = () => {
  const audio = new Audio(ClickSound);
  audio.load();
  audio.volume = 0.6;
  audio.play();
};

export const playHoverSound = () => {
  const audio = new Audio(HoverSound);
  audio.load();
  audio.volume = 0.5;
  audio.play();
};

export default Soundtrack;

const SoundtrackBox = styled.div`
  display: none;
`;