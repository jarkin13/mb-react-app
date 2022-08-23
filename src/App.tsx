import Header from "./ui/Header";
import Tag from "./ui/Tag";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="filterbar">
        <Tag text="All" />
        <Tag text="Live" />
        <Tag text="Music" />
        <Tag text="Gaming" />
        <Tag text="KSI" />
      </div>
    </div>
  );
}

export default App;
