import { ReactComponent as ExploreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/explore.svg";
import { ReactComponent as HistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/history.svg";
import { ReactComponent as LibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/library.svg";
import { ReactComponent as HomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/home.svg";
import { ReactComponent as LikeVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/liked-videos.svg";
import { ReactComponent as ShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/shorts.svg";
import { ReactComponent as ShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/show-more.svg";
import { ReactComponent as SubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/subscriptions.svg";
import { ReactComponent as WatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/watch-later.svg";
import { ReactComponent as YourVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/baricons/your-videos.svg";
import SideTag from "../../SideTag";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <a href="/" className="sidebar-link home">
          <div className="LinkContent home-icon">
            <HomeIcon />
            <SideTag text="Home" active />
          </div>
        </a>

        <a href="/" className="sidebar-link explore">
          <div className="LinkContent explore-icon">
            <div className="sidebarIconColumn">
              <ExploreIcon />
            </div>
            <SideTag text="Explore" active />
          </div>
        </a>
        <a href="/" className="sidebar-link shorts">
          <div className="LinkContent shorts-icon">
            <div className="sidebarIconColumn">
              <ShortsIcon />
            </div>
            <SideTag text="Shorts" active />
          </div>
        </a>
        <a href="/" className="sidebar-link subscriptions">
          <div className="LinkContent subs-icon">
            <div className="sidebarIconColumn">
              <SubscriptionsIcon />
            </div>
            <SideTag text="Subscriptions" active />
          </div>
        </a>
        <a href="/" className="sidebar-link library">
          <div className="LinkContent library-icon">
            <div className="sidebarIconColumn">
              <LibraryIcon />
            </div>
            <SideTag text="Library" active />
          </div>
        </a>
        <a href="/" className="sidebar-link history">
          <div className="LinkContent history-icon">
            <div className="sidebarIconColumn">
              <HistoryIcon />
            </div>
            <SideTag text="History" active />
          </div>
        </a>
        <a href="/" className="sidebar-link your-videos">
          <div className="LinkContent your-videos-icon">
            <div className="sidebarIconColumn">
              <YourVideosIcon />
            </div>
            <SideTag text="Your Videos" active />
          </div>
        </a>
        <a href="/" className="sidebar-link watch-later">
          <div className="LinkContent watch-later-icon">
            <div className="sidebarIconColumn">
              <WatchLaterIcon />
            </div>
            <SideTag text="Watch Later" active />
          </div>
        </a>
        <a href="/" className="sidebar-link liked-videos">
          <div className="LinkContent liked-videos-icon">
            <div className="sidebarIconColumn">
              <LikeVideosIcon />
            </div>
            <SideTag text="Liked Videos" active />
          </div>
        </a>

        <a href="/" className="sidebar-link show-more">
          <div className="LinkContent show-more-icon">
            <div className="sidebarIconColumn">
              <ShowMoreIcon />
            </div>
            <SideTag text="Show More" active />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
