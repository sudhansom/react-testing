import React, { useState } from "react";

export default function Toogle(props) {
  const [state, setState] = useState(false);
  return (
    <button
      onClick={() => {
        setState((previousState) => !previousState);
        props.onChange();
      }}
      data-testid="toogle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
