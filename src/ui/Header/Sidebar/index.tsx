import { ReactComponent as ExploreIcon } from "./Header/explore.svg";
import { ReactComponent as HistoryIcon } from "./baricons/history.svg";
import { ReactComponent as LibraryIcon } from "./baricons/library.svg";
import { ReactComponent as HomeIcon } from "./baricons/home.svg";
import { ReactComponent as LikeVideosIcon } from "./baricons/like-videos.svg";
import { ReactComponent as ShortsIcon } from "./baricons/shorts.svg";
import { ReactComponent as ShowMoreIcon } from "./baricons/show-more.svg";
import { ReactComponent as SubscriptionsIcon } from "./baricons/subscriptions.svg";
import { ReactComponent as WatchLaterIcon } from "./baricons/watch-later.svg";
import { ReactComponent as YourVideosIcon } from "./ui/Header/your-videos.svg";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-link home">
        <div className="icon home-icon">
          <HomeIcon />
        </div>
      </div>
      <div className="sidebar-link explore">
        <div className="icon explore-icon">
          <ExploreIcon />
        </div>
      </div>
      <div className="sidebar-link shorts">
        <div className="icon shorts-icon">
          <ShortsIcon />
        </div>
      </div>
      <div className="sidebar-link subscriptions">
        <div className="icon subs-icon">
          <SubscriptionsIcon />
        </div>
      </div>
      <div className="sidebar-link library">
        <div className="icon library-icon">
          <LibraryIcon />
        </div>
      </div>
      <div className="sidebar-link history">
        <div className="icon history-icon">
          <HistoryIcon />
        </div>
      </div>
      <div className="sidebar-link your-videos">
        <div className="icon your-videos-icon">
          <YourVideosIcon />
        </div>
      </div>
      <div className="sidebar-link watch-later">
        <div className="icon watch-later-icon">
          <WatchLaterIcon />
        </div>
      </div>
      <div className="sidebar-link liked-videos">
        <div className="icon liked-videos-icon">
          <LikeVideosIcon />
        </div>
      </div>
      <div className="sidebar-link show-more">
        <div className="icon show-more-icon">
          <ShowMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
