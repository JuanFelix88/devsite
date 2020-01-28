import React from "react";
import Conversation from "../../components/conversation";
import Header from "../../components/header";
import Content from "../../components/content";
import Profile from "../../components/profile";
import "./style.css";

function HomePage() {
  return (
    <div className="home-background">
      <Header />
      <Content>
        <Conversation />
        <Profile />
      </Content>
    </div>
  );
}

export default HomePage;
