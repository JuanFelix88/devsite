import React from "react";
import RepoLogo from "../../assets/repo.svg";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  link?: string;
}

const Repo = (props: Props): JSX.Element => (
  <li style={props.style} className="repository">
    <img src={RepoLogo} alt="repository" />
    <a href={props.link}>{props.children}</a>
  </li>
);

export default Repo;
