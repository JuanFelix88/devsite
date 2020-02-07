import React from "react";
import RepoLogo from "../../assets/repo.svg";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Repo = (props: Props): JSX.Element => (
  <li style={props.style} className="repository">
    <img src={RepoLogo} alt="repository" />
    <span>{props.children}</span>
  </li>
);

export default Repo;
