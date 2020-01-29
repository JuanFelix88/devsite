import React, { useState, useMemo } from "react";
import "./style.css";
import Stack from "./stack";
import BagButton, { Content } from "../question-bag";
import { Stages } from "./stack";

interface PropsConversation {
  children?: string;
}

function Conversation(props: PropsConversation) {
  const [text, setText] = useState<string | undefined>("");
  const [op, setOp] = useState<boolean>(false);
  const [showBags, setShowbags] = useState<boolean>(false);
  const [stage, setStage] = useState<Stages>("apresentation");

  const [QuestionInput, setQuestionInput] = useState<JSX.Element>();

  function handleClickProjects(): void {
    setTimeout(() => setShowbags(false), 150);
    setStage("loading-apresentation");
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
          <BagButton delay={300}>I just need to get in touch</BagButton>
        </Content>
      ) : (
        <Content />
      )}

      {QuestionInput}

      <Stack
        setQuestionInput={setQuestionInput}
        setText={setText}
        setOp={setOp}
        setShowBags={setShowbags}
        stage={stage}
        setStage={setStage}
      />
    </div>
  );
}

export default Conversation;
