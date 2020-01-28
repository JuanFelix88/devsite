import React, { useState, useEffect } from "react";
import "./style.css";
import Stack from "./stack";
import BagButton, { Content } from "../question-bag";

type Stages = "apresentation" | "loading-answer" | "get-name";

interface PropsConversation {
  children?: string;
}

function Conversation(props: PropsConversation) {
  const [text, setText] = useState<string | undefined>("");
  const [op, setOp] = useState<boolean>(false);
  const [showBags, setShowbags] = useState<boolean>(false);
  const [stage, setStage] = useState<Stages>("apresentation");

  // useEffect(() => {
  //   setStage("apresentation");
  // }, []);

  function handleClickProjects(): void {
    console.log("teste!");
    setStage("get-name");
  }

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
          <BagButton onClick={handleClickProjects}>
            I want a project like web, system, mobile and others
          </BagButton>
          <BagButton>I just need to get in touch</BagButton>
        </Content>
      ) : null}

      <Stack
        setText={setText}
        setOp={setOp}
        setShowBags={setShowbags}
        stage={stage}
      />
    </div>
  );
}

export default Conversation;
