import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import About from "./components/About";
import Navigation from "./components/Navigation";
import "./index.scss";

type Mode = "light" | "dark";

function App() {
  const [mode, setMode] = useState<Mode>("dark");

  const handleModeChange = () => {
    setMode(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <About />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
