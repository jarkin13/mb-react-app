import Header from "./ui/Header";
import Tags from "./ui/Tags";
import Sidebar from "./ui/Sidebar";
import "./App.css";
import ActiveSidebar from "./ui/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <ActiveSidebar />
      <div className="filterbar">
        <Tags />
      </div>
    </div>
  );
}

export default App;
