import React, { useState } from "react";

function Input({ isTrue }) {
  const [text, setText] = useState("y");
  return (
    <div>
      <input
        data-testid="inputField"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {isTrue && <div data-testid="divToShow">{text}</div>}
    </div>
  );
}

export default Input;
