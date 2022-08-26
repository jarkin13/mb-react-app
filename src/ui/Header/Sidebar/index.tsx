import { ReactComponent as ExploreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/explore.svg";
import { ReactComponent as HistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/history.svg";
import { ReactComponent as LibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/home.svg";
import { ReactComponent as HomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/library.svg";
import { ReactComponent as LikeVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/liked-videos.svg";
import { ReactComponent as ShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/shorts.svg";
import { ReactComponent as ShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/show-more.svg";
import { ReactComponent as SubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/subscriptions.svg";
import { ReactComponent as WatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/watch-later.svg";
import { ReactComponent as YourVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/your-videos.svg";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-link home">
          <div className="icon-selector home-icon">
            <HomeIcon />
            <p>Home</p>
          </div>
        </div>
        <div className="sidebar-link explore">
          <div className="icon-selector explore-icon">
            <ExploreIcon />
            <p>Explore</p>
          </div>
        </div>
        <div className="sidebar-link shorts">
          <div className="icon-selector shorts-icon">
            <ShortsIcon />
            <p></p>
          </div>
        </div>
        <div className="sidebar-link subscriptions">
          <div className="icon-selector subs-icon">
            <SubscriptionsIcon />
            <p>Subscriptions</p>
          </div>
        </div>
        <div className="sidebar-link library">
          <div className="icon-selector library-icon">
            <LibraryIcon />
          </div>
        </div>
        <div className="sidebar-link history">
          <div className="icon-selector history-icon">
            <HistoryIcon />
          </div>
        </div>
        <div className="sidebar-link your-videos">
          <div className="icon-selector your-videos-icon">
            <YourVideosIcon />
          </div>
        </div>
        <div className="sidebar-link watch-later">
          <div className="icon-selector watch-later-icon">
            <WatchLaterIcon />
          </div>
        </div>
        <div className="sidebar-link liked-videos">
          <div className="icon-selector liked-videos-icon">
            <LikeVideosIcon />
          </div>
        </div>
        <div className="sidebar-link show-more">
          <div className="icon-selector show-more-icon">
            <ShowMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
