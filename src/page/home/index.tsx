import React, { useEffect, useMemo } from "react";
import Conversation from "../../components/conversation";
import Header from "../../components/header";
import Content from "../../components/content";
import Profile from "../../components/profile";
import BoxeSky from "../../components/sky-background";
import "./style.css";

function HomePage() {
  const amount = useMemo<number>(() => {
    return Math.floor((window.innerHeight + window.innerWidth) / 50 + 5);
  }, []);

  return (
    <div className="home-background">
      {/* <Header /> */}
      <Content>
        <Conversation />
        <Profile />
      </Content>
      <BoxeSky amount={amount} />
    </div>
  );
}

export default HomePage;
