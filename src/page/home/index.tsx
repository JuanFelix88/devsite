import React, { useMemo, useState, useEffect } from "react";
import Conversation from "../../components/conversation";
// import Header from "../../components/header";
import Content from "../../components/content";
import Profile from "../../components/profile";
import BoxeSky from "../../components/sky-background";
import "./style.css";
import SocialBag from "../../components/social-bag";
import TecnologiesBox from "../../components/technologies-box";
import { createEventScroll, setActiveEventScroll } from "../../api/scroll";
import SkyEngine from "../../api/sky";
import Projects from "../../components/projects";
import Footer from "../../components/page-footer";

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

  useEffect(() => {
    createEventScroll({ isLowerThan: 250, onlyOnce: true }, () => {
      SkyEngine.turnOn();
    });

    createEventScroll({ isGreaterThan: 250, onlyOnce: true }, () => {
      setShowJS(true);
    });

    createEventScroll({ isGreaterThan: 550, onlyOnce: true }, () => {
      setShowFigma(true);
    });

    createEventScroll({ isGreaterThan: 700, isLowerThan: 1000 }, () => {
      SkyEngine.turnOff();
    });

    createEventScroll({ isGreaterThan: 1000 }, () => {
      SkyEngine.turnOn();
    });

    createEventScroll({ isGreaterThan: 650, onlyOnce: true }, () => {
      setShowRN(true);
    });

    createEventScroll({ isGreaterThan: 850, onlyOnce: true }, () => {
      setShowRust(true);
    });

    createEventScroll({ isGreaterThan: 1150, onlyOnce: true }, () => {
      setShowTitleProjects(true);
    });

    createEventScroll({ isGreaterThan: 1300, onlyOnce: true }, () => {
      setShowProjects(true);
      setActiveEventScroll(false);
    });
  }, []);

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
      <Footer />
    </>
  );
}

export default HomePage;
