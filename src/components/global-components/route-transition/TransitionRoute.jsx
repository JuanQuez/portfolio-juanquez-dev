import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FramesBox = styled.div`
  .slide-in,
  .slide-out {
    z-index: 3;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: fixed;
    background: var(--color-primary);
  }
  
  .slide-in {
    transform-origin: bottom;
    border-top: 5rem solid var(--color-shade-primary);
  }
  
  .slide-out {
    transform-origin: top;
    border-bottom: 5rem solid var(--color-shade-primary);
  }
`;

const TransitionRoute = (OgComponent) => {
  return () => (
    <FramesBox>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 0.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </FramesBox>
  );
};

export default TransitionRoute;
