import Header from "./ui/Header";
import Tags from "./ui/Tags";
import VideoPreview from "./ui/VideoPreview";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="filterbar">
        <Tags />
      </div>
      <VideoPreview />
    </div>
  );
};

export default App;
