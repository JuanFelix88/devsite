import React from "react";
import "./style.css";
import BoxInteractive from "./box-interactive";
import JSLogo from "../../assets/js.svg";
import FigmaLogo from "../../assets/figma.svg";
import Native from "../../assets/react-native.svg";
import Rust from "../../assets/rust.svg";
import Left from "./left";
import Right from "./right";

const TecnologiesBox = (): JSX.Element => {
  return (
    <div className="box-tecnologies">
      <Right>
        <BoxInteractive
          align="right"
          text="Using what is most current in the web market in JavaScript, technologies
         such as React.js with Redux, Node.js with Express.js and Adonis.js, Electron.js and others..."
          img={JSLogo}
        />
      </Right>
      <Left>
        <BoxInteractive
          align="left"
          text="Developing my own design system with Figma, a powerful 
          open source tool that offers you everything you need to create your interfaces."
          img={FigmaLogo}
        />
      </Left>
      <Right>
        <BoxInteractive
          align="right"
          text="React Native, develop native apps with the wonderful 
          tool created by Facebook, with a rich community working behind its development."
          img={Native}
        />
      </Right>
      <Left>
        <BoxInteractive
          align="left"
          text="Rust, a powerful language that has exceptional performance and 
          security, I adopted it for my development when I need heavy processing and complex algorithms."
          img={Rust}
        />
      </Left>
    </div>
  );
};

export default TecnologiesBox;
