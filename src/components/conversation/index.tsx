import React from "react";
import "./style.css";

interface PropsConversation {
  children?: string;
}

function Conversation(props: PropsConversation) {
  return (
    <div className="conversation">
      <span>{props.children}</span>
    </div>
  );
}

export default Conversation;
