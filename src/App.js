import "./App.css";
import DisplayName from "./components/DisplayName";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <DisplayName userName="sudhan" />
      <User url={"https://api.github.com/users/sudhansom"} />
    </div>
  );
}

export default App;
