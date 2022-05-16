import React, { useState } from "react";

function Input({ isTure }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        data-testid="inputField"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {isTure && <h3 data-testid="textDisplayDiv">{text}</h3>}
    </div>
  );
}

export default Input;
