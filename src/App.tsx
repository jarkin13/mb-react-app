import Header from "./ui/Header";

import Tags from "./ui/Tags";

import VideoTitleText from "./ui/Thumnailpreviews/VideoTitleText";
import VideoButtons from "./ui/VideoButtons";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="filterbar">
        <Tags />
      </div>
      <div className="Content">
        <VideoTitleText
          videoTitle={"House Of Dragon"}
          viewsText={"100k"}
          timeAgoPosted={""}
          youtuberName={"Emergency Awesome"}
          videoThumbnail={
            "https://i.ytimg.com/vi/h0a5i-jJ77s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAz_LqzHr_Nn01JglgAQr4vKZYnbgd"
          }
          youtuberIcon={
            "https://yt3.ggpht.com/yc8u3QnOyb0iZ4eIumSgQgxRbRt_hgOg_BAwnsV0juT5Z0spruZ0csgwPWZwzD3vx02_7dzA=s88-c-k-c0x00ffffff-no-rj"
          }
        />
        <VideoButtons />
      </div>
    </div>
  );
};

export default App;
