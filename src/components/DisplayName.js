import React from "react";

function DisplayName({ userName }) {
  if (userName) {
    return <h1 data-testid="username">Hello, {userName}</h1>;
  } else {
    return <h3 data-testid="noUsername">Hey, who are you??</h3>;
  }
}

export default DisplayName;
