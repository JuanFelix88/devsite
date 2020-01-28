import React, { useState } from "react";
import "./style.css";
import Stack from "./stack";
import BagButton, { Content } from "../question-bag";

interface PropsConversation {
  children?: string;
}

function Conversation(props: PropsConversation) {
  const [text, setText] = useState<string | undefined>("");
  const [op, setOp] = useState<boolean>(false);
  const [showBags, setShowbags] = useState<boolean>(false);

  return (
    <div className="conversation">
      <span
        style={{
          opacity: op ? 1 : 0
        }}
      >
        {text}
      </span>
      {showBags ? (
        <Content>
          <BagButton>
            I want a project like web, system, mobile and others
          </BagButton>
          <BagButton>I just need to get in touch</BagButton>
        </Content>
      ) : null}

      <Stack setText={setText} setOp={setOp} setShowBags={setShowbags} />
    </div>
  );
}

export default Conversation;
