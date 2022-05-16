import React, { useState } from "react";

function Input({ isTrue }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        data-testid="inputField"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {isTrue && <div data-testid="divToShow">{text}</div>}
      <h2 data-testid="header">Please subscribe me</h2>
    </div>
  );
}

export default Input;
