import React from "react";
import "./style.css";
import BoxInteractive from "./box-interactive";
import JSLogo from "../../assets/js.svg";

const TecnologiesBox = (): JSX.Element => {
  return (
    <div className="box-tecnologies">
      <BoxInteractive
        align="left"
        text="Using what is most current in the web market in JavaScript, technologies \
         such as React.js with Redux, Node.js with Express.js and Adonis.js, Electron.js and others..."
        img={JSLogo}
      />
      <BoxInteractive
        align="left"
        text="Developing my own design system with Figma, a powerful open source tool \
        that offers you everything you need to create your interfaces."
        img={JSLogo}
      />
    </div>
  );
};

export default TecnologiesBox;
