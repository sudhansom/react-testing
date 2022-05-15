import React, { useState } from "react";
import "./App.css";
import DisplayName from "./components/DisplayName";
import User from "./components/User";
import Toogle from "./components/Toogle";

function App() {
  const [state, setState] = useState(false);
  const handleChange = (state) => {
    setState(!state);
  };
  return (
    <div className="App">
      <DisplayName userName="sudhan" />
      <User url={"https://api.github.com/users/sudhansom"} />
      <Toogle
        onChange={() => {
          handleChange(state);
        }}
      />
    </div>
  );
}

export default App;
