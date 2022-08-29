import { ReactComponent as ExploreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/explore.svg";
import { ReactComponent as HistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/history.svg";
import { ReactComponent as LibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/library.svg";
import { ReactComponent as HomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/home.svg";
import { ReactComponent as LikeVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/liked-videos.svg";
import { ReactComponent as ShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/shorts.svg";
import { ReactComponent as ShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/show-more.svg";
import { ReactComponent as SubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/subscriptions.svg";
import { ReactComponent as WatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/watch-later.svg";
import { ReactComponent as YourVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/your-videos.svg";
import SideTag from "../../SideTag";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <HomeIcon />
          </div>
          <SideTag text="Home" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <ExploreIcon />
          </div>
          <SideTag text="Explore" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <ShortsIcon />
          </div>
          <SideTag text="Shorts" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <SubscriptionsIcon />
          </div>
          <SideTag text="Subscriptions" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <LibraryIcon />
          </div>
          <SideTag text="Library" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <HistoryIcon />
          </div>
          <SideTag text="History" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <YourVideosIcon />
          </div>
          <SideTag text="Your Videos" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <WatchLaterIcon />
          </div>
          <SideTag text="Watch Later" active />
        </a>
        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <LikeVideosIcon />
          </div>
          <SideTag text="Liked Videos" active />
        </a>

        <a href="/" className="sidebar-link LinkContent">
          <div className="sidebarIconColumn">
            <ShowMoreIcon />
          </div>
          <SideTag text="Show More" active />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
