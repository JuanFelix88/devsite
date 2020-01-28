import React, { useEffect } from "react";

interface StackProps {
  setText?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOp: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBags: React.Dispatch<React.SetStateAction<boolean>>;
  stage?: "apresentation" | "loading-answer" | "get-name";
}

function Stack(props: StackProps) {
  const { setText, setOp, setShowBags, stage } = props;

  useEffect(() => {
    setOp(true);
    handleUpdateText(".");
    setTimeout(() => handleUpdateText(".."), 600);
    setTimeout(() => handleUpdateText("..."), 1000);
    setTimeout(() => handleUpdateText("."), 1400);
    setTimeout(() => handleUpdateText(".."), 1800);
    setTimeout(() => handleUpdateText("..."), 2200);
    setTimeout(() => handleUpdateText("Hi, whats up?"), 2600);
    setTimeout(() => handleUpdateText("How i help you?"), 5500);
    setTimeout(() => setShowBags(true), 5950);
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
