import React, { useCallback, useMemo, useState, useEffect } from "react";
import Conversation from "../../components/conversation";
import Header from "../../components/header";
import Content from "../../components/content";
import Profile from "../../components/profile";
import BoxeSky from "../../components/sky-background";
import "./style.css";
import SocialBag from "../../components/social-bag";
import TecnologiesBox from "../../components/technologies-box";
import { usePageEventScroll } from "../../api/scroll";
import SkyEngine from "../../api/sky";

function HomePage() {
  const amount = useMemo<number>(() => {
    return Math.floor((window.innerHeight + window.innerWidth) / 50 + 5);
  }, []);

  const [showFigma, setShowFigma] = useState(false);
  const [showJS, setShowJS] = useState(false);
  const [showRN, setShowRN] = useState(false);
  const [showRust, setShowRust] = useState(false);

  usePageEventScroll({ isLowerThan: 250, onlyOnce: true }, () => {
    SkyEngine.turnOn();
  });

  usePageEventScroll({ isGreaterThan: 250, onlyOnce: true }, () => {
    setShowJS(true);
  });

  usePageEventScroll({ isGreaterThan: 550, onlyOnce: true }, () => {
    setShowFigma(true);
  });

  usePageEventScroll({ isGreaterThan: 600 }, () => {
    SkyEngine.turnOff();
  });

  usePageEventScroll({ isGreaterThan: 750, onlyOnce: true }, () => {
    setShowRN(true);
  });

  usePageEventScroll({ isGreaterThan: 900, onlyOnce: true }, () => {
    setShowRust(true);
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
    </>
  );
}

export default HomePage;
