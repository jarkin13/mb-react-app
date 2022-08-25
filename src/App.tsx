import Header from "./ui/Header";
import Tags from "./ui/Tags";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="filterbar">
        <Tags />
      </div>
    </div>
  );
}

export default App;
