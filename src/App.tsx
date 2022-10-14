import Header from "./ui/Header";
import ShortsPreviews from "./ui/ShortsPreviews";
import Tags from "./ui/Tags";
import VideoPreview from "./ui/Thumnailpreviews/VideoPreview";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="filterbar">
        <Tags />
      </div>
      <VideoPreview />
      <ShortsPreviews />
      <div className="Content"></div>
    </div>
  );
};

export default App;
