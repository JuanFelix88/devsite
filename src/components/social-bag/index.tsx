import React from "react";
import "./style.css";
import GitLogo from "../../assets/social/git-hub.svg";
import TwitterLogo from "../../assets/social/twitter.svg";
import MediumLogo from "../../assets/social/medium.svg";
import GmailLogo from "../../assets/social/gmail.svg";
import LinkedInLogo from "../../assets/social/linked-in.svg";

function SocialBag() {
  return (
    <div className="bag-social">
      <img src={GitLogo} style={{ animationDelay: "1300ms" }} alt="Git Hub" />
      <img
        src={TwitterLogo}
        style={{ animationDelay: "1500ms" }}
        alt="Twitter"
      />
      <img src={MediumLogo} style={{ animationDelay: "1700ms" }} alt="Medium" />
      <img
        src={GmailLogo}
        style={{ animationDelay: "1900ms" }}
        alt="Gmail Google"
      />
      <img
        src={LinkedInLogo}
        style={{ animationDelay: "2100ms" }}
        alt="LinkedIn"
      />
    </div>
  );
}

export default SocialBag;
