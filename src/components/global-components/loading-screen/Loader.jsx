import React from "react";
import styled from "styled-components";
const Pulse = styled.div``;
const Pixel = styled.div``;

const PixelLoader = styled.div`
  min-height: 1rem;

  ${Pixel} {
    width: 2rem;
    animation: 3s linear infinite;
  }

  ${Pixel}::before {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--color-secondary);
    animation: animatePixel 1s infinite;
    animation-delay: calc(0.05s * (var(--i) + var(--y)));
  }

  @keyframes animatePixel {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(.3);
    }
  }
`;

const Loader = () => {
  return (
    <PixelLoader>
      <Pulse style={{ "--y": 1 }}>
        <Pixel style={{ "--i": 1 }}></Pixel>
        <Pixel style={{ "--i": 2 }}></Pixel>
        <Pixel style={{ "--i": 3 }}></Pixel>
        <Pixel style={{ "--i": 4 }}></Pixel>
        <Pixel style={{ "--i": 5 }}></Pixel>
      </Pulse>
    </PixelLoader>
  );
};

export default Loader;
