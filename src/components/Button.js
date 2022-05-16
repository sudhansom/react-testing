import React, { useState } from "react";

function Button() {
  const [showNextButton, setShowNextButton] = useState(false);
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => {
          setShowNextButton(!showNextButton);
        }}
      >
        Click Me
      </button>
      {showNextButton && <button data-testid="button">I am here</button>}
    </div>
  );
}

export default Button;
