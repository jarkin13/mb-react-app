import Header from "./ui/Header";
import Tags from "./ui/Tags";
import Sidebar from "./ui/Sidebar";
import "./App.css";

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
