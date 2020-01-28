import React, { useEffect, useCallback } from "react";
import QuestionInput from "../question-input";

type Stages =
  | "apresentation"
  | "loading-apresentation"
  | "loading-answer"
  | "get-name";

interface StackProps {
  setText?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOp: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBags: React.Dispatch<React.SetStateAction<boolean>>;
  stage: Stages;
  setQuestionInput: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setStage: React.Dispatch<React.SetStateAction<Stages>>;
}

function Stack(props: StackProps) {
  const {
    setText,
    setOp,
    setShowBags,
    stage,
    setQuestionInput,
    setStage
  } = props;

  const handleStageApresentation = useCallback(() => {
    setOp(true);
    setQuestionInput(<></>);

    handleUpdateText(".");
    setTimeout(() => handleUpdateText(".."), 600);
    setTimeout(() => handleUpdateText("..."), 1000);
    setTimeout(() => handleUpdateText("."), 1400);
    setTimeout(() => handleUpdateText(".."), 1800);
    setTimeout(() => handleUpdateText("..."), 2200);
    setTimeout(() => handleUpdateText("Hi, whats up?"), 2600);
    setTimeout(() => handleUpdateText("How to help you?"), 5500);
    setTimeout(() => setShowBags(true), 5650);
  }, []); // eslint-disable-line

  const handleStageLoadApresentation = useCallback(() => {
    setOp(false);
    setQuestionInput(<></>);
    setTimeout(() => handleUpdateText?.("alright"), 200);
    setTimeout(() => handleUpdateText?.("alright"), 200);
    setTimeout(() => setStage("get-name"), 2900);
  }, []); // eslint-disable-line

  const handleStageGetName = useCallback(() => {
    setOp(false);
    setTimeout(() => handleUpdateText("Well, how can I call you?"), 200);
    setTimeout(
      () =>
        setQuestionInput(
          <QuestionInput
            onDoneForm={() => {
              setStage("loading-apresentation");
            }}
          />
        ),
      350
    );
  }, []); // eslint-disable-line

  useEffect(() => {
    if (stage === "apresentation") handleStageApresentation();
    if (stage === "loading-apresentation") handleStageLoadApresentation();
    if (stage === "get-name") handleStageGetName();
  }, [stage]); // eslint-disable-line

  function handleUpdateText(text: string): void {
    setOp(false);
    setTimeout(() => {
      setText?.(text);
      setOp(true);
    }, 200);
  }
  return <></>;
}

export default Stack;
