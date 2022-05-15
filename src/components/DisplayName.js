import React from "react";

function DisplayName({ userName }) {
  if (userName) {
    return <h1>Hello, {userName}</h1>;
  } else {
    return <h3>Hey, who are you??</h3>;
  }
}

export default DisplayName;
