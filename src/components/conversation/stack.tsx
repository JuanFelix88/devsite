import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback
} from "react";

interface StackProps {
  setText?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOp: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBags: React.Dispatch<React.SetStateAction<boolean>>;
  stage?: "apresentation" | "loading-answer" | "get-name";
}

function Stack(props: StackProps) {
  const { setText, setOp, setShowBags, stage } = props;

  // const memoizedCallback = useCallback(() => {
  //   if (props.stage === "apresentation") return handleStageApresentation();
  //   if (props.stage === "get-name") return handleStageGetName();
  // }, [props]); // eslint-disable-line
  const handleStageApresentation = useCallback(() => {
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
  }, []); // eslint-disable-line

  const handleStageGetName = useCallback(() => {
    setOp(false);
    setShowBags(false);
    setTimeout(() => handleUpdateText?.("alright."), 200);
    setTimeout(() => setText?.("alright.."), 600);
    setTimeout(() => setText?.("alright..."), 1000);
    setTimeout(() => setText?.("alright."), 1400);
    setTimeout(() => setText?.("alright.."), 1800);
    setTimeout(() => setText?.("alright..."), 2200);
    setTimeout(() => setText?.("alright."), 2600);
    setTimeout(() => setText?.("alright.."), 3000);
    setTimeout(() => setText?.("alright..."), 3400);
    setTimeout(() => handleUpdateText("Ok!"), 3900);
  }, []); // eslint-disable-line

  useEffect(() => {
    if (stage === "apresentation") handleStageApresentation();

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
