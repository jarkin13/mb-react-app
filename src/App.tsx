import Header from "./ui/Header";
import Sidebar from "./ui/Header/Sidebar";
import Tags from "./ui/Tags";
import ActiveHomeIcon from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeHome.svg";

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
