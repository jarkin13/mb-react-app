import Header from "./ui/Header";
import Sidebar from "./ui/Header/Sidebar";
import Tags from "./ui/Tags";
//import Sidebar from "./ui/Header/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tags />
      <Sidebar />
    </div>
  );
};

export default App;
