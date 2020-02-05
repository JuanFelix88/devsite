import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Left = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1650px",
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      {props.children}
    </div>
  );
};

export default Left;
