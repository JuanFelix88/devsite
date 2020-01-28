import React, { useEffect, useMemo } from "react";
import RenderBox from "../../api/sky";
import "./style.css";

interface Props {
  /**
   * @default 20
   */
  amount?: number;
}

function BoxesSky(props: Props) {
  const { list, resolveList } = useMemo(
    () => RenderBox.generateListBox(0, props.amount || 20),
    []
  );

  useEffect(() => {
    resolveList();
  }, []);

  return (
    <div className="home-sky">
      {list.map(item => (
        <div key={item} id={item} />
      ))}
    </div>
  );
}

export default BoxesSky;
