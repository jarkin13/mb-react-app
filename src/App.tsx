import Header from "./ui/Header";
import Tags from "./ui/Tags";
import "./App.css";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="filterbar">
        <Tags />
      </div>
    </div>
  );
}

export default App;
