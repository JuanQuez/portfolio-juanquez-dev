import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 2.5rem;
  gap: .8rem;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$widthProp};
  font-size: ${(props) => props.$fontSizeProp};
  white-space: nowrap;

  background: linear-gradient(
    var(--color-secondary) 50%,
    var(--color-shade-secondary) 50%
  );
  color: var(--color-white);
  text-shadow: 2.4px 2.4px var(--color-primary),
    -2.4px -2.4px var(--color-primary), 0 -2.4px var(--color-primary),
    0 2.4px var(--color-primary), 2.4px 0 var(--color-primary),
    -2.4px 0 var(--color-primary);
  box-shadow: inset 0 5px 0px rgba(255, 255, 255, 0.2),
    inset 5px 0px 0px rgba(255, 255, 255, 0.1),
    inset 0 -5px 0px rgba(0, 0, 0, 0.2), inset -5px 0px 0px rgba(0, 0, 0, 0.1),
    5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
    0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);

  &:hover {
    text-shadow: 2px 2px var(--color-primary), -2px -2px var(--color-primary),
      0 -2px var(--color-primary), 0 2px var(--color-primary),
      2px 0 var(--color-primary), -2px 0 var(--color-primary),
      4px 4px var(--color-primary);
    box-shadow: inset 0 5px 0px rgba(255, 255, 255, 0.4),
      inset 5px 0px 0px rgba(255, 255, 255, 0.3),
      inset 0 -5px 0px rgba(0, 0, 0, 0.3), inset -5px 0px 0px rgba(0, 0, 0, 0.2),
      5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
      0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);
  }

  &:active {
    text-shadow: 2px 2px var(--color-primary), -2px -2px var(--color-primary),
      0 -2px var(--color-primary), 0 2px var(--color-primary),
      2px 0 var(--color-primary), -2px 0 var(--color-primary);
    box-shadow: inset 0 -5px 0px rgba(255, 255, 255, 0.4),
      inset -5px 0px 0px rgba(255, 255, 255, 0.3),
      inset 0 5px 0px rgba(0, 0, 0, 0.3), inset 5px 0px 0px rgba(0, 0, 0, 0.2),
      5px 0px 0px var(--color-white), -5px 0px 0px var(--color-white),
      0px 5px 0px var(--color-white), 0px -5px 0px var(--color-white);
  }
`;

// EXPORT ELEMENT COMPONENT
// more about this process in the documentation of styled components library
const ButtonPixelArt = ({
  children,
  $fontSizeProp = "clamp(0.8rem, 1vw, 1.5rem)",
  $widthProp = "clamp(15rem, 18vw, 20rem)",
  ...props
}) => {
  return (
    <StyledButton
      $fontSizeProp={$fontSizeProp}
      $widthProp={$widthProp}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonPixelArt;
