import React, { useState } from "react";
/// IMPORT TRANSITION ANIMATION OF FRAMER MOTION
import { AnimatePresence } from "framer-motion";
// IMPORT REACT-ROUTER
import { HashRouter, Route, Routes } from "react-router-dom";
// IMPORT LOADING PAGE COMPONENT CUSTOM
import WrapperLoader from "./components/global-components/loading-screen/WrapperLoader";
// IMPORT BACKGROUND ANIMATION
import SquareAnimation from "./components/global-components/bkg-animation/SquareAnimation";
// IMPORT FOUND SONG
import Soundtrack from "./components/global-components/sounds-utils/Soundtrack";
// IMPORT APP COMPONENTS
import Home from "./components/sections-components/header-section/Home";
import AboutMe from "./components/sections-components/about-me-section/AboutMe";
import Skill from "./components/sections-components/skills-section/Skill";
import Project from "./components/sections-components/projects-section/Project";
import Review from "./components/sections-components/reviews-section/Review";
import Contact from "./components/sections-components/contact-section/Contact";


function App() {
  const [windowLoad, setWindowLoad] = useState(true);

  const handleyPressTouch = () => {
    setWindowLoad(false);
    window.removeEventListener("keydown", handleyPressTouch);
    window.removeEventListener("touchstart", handleyPressTouch);
  };

  React.useEffect(() => {
      if (window.innerWidth >= 1024) {
        window.addEventListener("keydown", handleyPressTouch);
      } else {
        window.addEventListener("touchstart", handleyPressTouch);
      }
  }, []);

  return (
    <>
      {windowLoad ? (
        <WrapperLoader />
      ) : (
        <HashRouter>
          <Soundtrack />
          <SquareAnimation />
          <AnimatePresence>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </HashRouter>
      )}
    </>
  );
}

export default App;
