import "./App.css";
import Card from "./components";
import task from "./components/data";

function App() {
  return <Card {...task} />;
}

export default App;
