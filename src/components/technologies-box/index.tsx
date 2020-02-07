import React from "react";
import "./style.css";
import BoxInteractive from "./box-interactive";
import JSLogo from "../../assets/js.svg";
import FigmaLogo from "../../assets/figma.svg";
import Native from "../../assets/react-native.svg";
import Rust from "../../assets/rust.svg";
import Left from "./left";
import Right from "./right";

interface Props {
  js: boolean;
  figma: boolean;
  rn: boolean;
  rust: boolean;
}

const TecnologiesBox = (props: Props): JSX.Element => {
  const { figma, js, rn, rust } = props;

  return (
    <div className="box-tecnologies">
      <Right>
        <BoxInteractive
          show={js}
          align="right"
          text="Using what is most current in the web market in JavaScript, technologies
         such as React.js with Redux, Node.js with Express.js and Adonis.js, Electron.js and others."
          img={JSLogo}
        />
      </Right>
      <Left>
        <BoxInteractive
          show={figma}
          align="left"
          text="Developing my own design system with Figma, a powerful 
          open source tool that offers you everything you need to create your interfaces."
          img={FigmaLogo}
        />
      </Left>
      <Right>
        <BoxInteractive
          show={rn}
          align="right"
          text="React Native, develop native apps with the wonderful 
          tool created by Facebook, with a rich community working behind its development."
          img={Native}
        />
      </Right>
      <Left>
        <BoxInteractive
          show={rust}
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
