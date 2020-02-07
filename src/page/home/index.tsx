import React, { useMemo, useState } from "react";
import Conversation from "../../components/conversation";
// import Header from "../../components/header";
import Content from "../../components/content";
import Profile from "../../components/profile";
import BoxeSky from "../../components/sky-background";
import "./style.css";
import SocialBag from "../../components/social-bag";
import TecnologiesBox from "../../components/technologies-box";
import { usePageEventScroll } from "../../api/scroll";
import SkyEngine from "../../api/sky";
import Projects from "../../components/projects";

function HomePage() {
  const amount = useMemo<number>(() => {
    return Math.floor((window.innerHeight + window.innerWidth) / 50 + 5);
  }, []);

  const [showFigma, setShowFigma] = useState(false);
  const [showJS, setShowJS] = useState(false);
  const [showRN, setShowRN] = useState(false);
  const [showRust, setShowRust] = useState(false);
  const [showTitleProjects, setShowTitleProjects] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  usePageEventScroll({ isLowerThan: 250, onlyOnce: true }, () => {
    SkyEngine.turnOn();
  });

  usePageEventScroll({ isGreaterThan: 250, onlyOnce: true }, () => {
    setShowJS(true);
  });

  usePageEventScroll({ isGreaterThan: 650, onlyOnce: true }, () => {
    setShowFigma(true);
  });

  usePageEventScroll({ isGreaterThan: 700, isLowerThan: 1000 }, () => {
    SkyEngine.turnOff();
  });

  usePageEventScroll({ isGreaterThan: 1000 }, () => {
    SkyEngine.turnOn();
  });

  usePageEventScroll({ isGreaterThan: 850, onlyOnce: true }, () => {
    setShowRN(true);
  });

  usePageEventScroll({ isGreaterThan: 1000, onlyOnce: true }, () => {
    setShowRust(true);
  });

  usePageEventScroll({ isGreaterThan: 1250, onlyOnce: true }, () => {
    setShowTitleProjects(true);
  });

  usePageEventScroll({ isGreaterThan: 1400, onlyOnce: true }, () => {
    setShowProjects(true);
  });

  return (
    <>
      <div className="home-background">
        {/* <Header /> */}
        <Content>
          <Conversation />
          <Profile />
        </Content>
        <BoxeSky amount={amount} />
        <SocialBag />
      </div>
      <TecnologiesBox
        figma={showFigma}
        js={showJS}
        rn={showRN}
        rust={showRust}
      />
      <Projects showProjects={showProjects} showTitle={showTitleProjects} />
    </>
  );
}

export default HomePage;
