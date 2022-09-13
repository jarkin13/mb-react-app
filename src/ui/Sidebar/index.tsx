import { useState, ReactElement } from "react";
import SidebarTab from "./SidebarTab";
import { ReactComponent as ExploreIcon } from "./SideBarIcons/explore.svg";
import { ReactComponent as HistoryIcon } from "./SideBarIcons/history.svg";
import { ReactComponent as HomeIcon } from "./SideBarIcons/Home.svg";
import { ReactComponent as LibraryIcon } from "./SideBarIcons/library.svg";
import { ReactComponent as LikedVideosIcon } from "./SideBarIcons/likedvideos.svg";
import { ReactComponent as ShortsIcon } from "./SideBarIcons/shorts.svg";
import { ReactComponent as ShowMoreIcon } from "./SideBarIcons/showmore.svg";
import { ReactComponent as SubscriptionsIcon } from "./SideBarIcons/subscriptions.svg";
import { ReactComponent as WatchLaterIcon } from "./SideBarIcons/watchlater.svg";
import { ReactComponent as YourVideosIcon } from "./SideBarIcons/yourvideos.svg";
import "./index.css";

const Sidebar = (): ReactElement => {
  const [active, setActive] = useState("home");

  const setActiveTab = (text: string): void => {
    setActive(text);
  };

  return (
    <div>
      <div className="Tabs">
        <div className="icon">
          <HomeIcon />
        </div>
        <SidebarTab setActiveTab={() => setActiveTab("home")} text="Home" />
      </div>

      <div className="Tabs">
        <div className="icon">
          <ExploreIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("explore")}
          text="Explore"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <ShortsIcon />
        </div>
        <SidebarTab setActiveTab={() => setActiveTab("shorts")} text="Shorts" />
      </div>

      <div className="Tabs">
        <div className="icon">
          <SubscriptionsIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("subscriptions")}
          text="Subscriptions"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <LibraryIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("library")}
          text="Library"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <HistoryIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("history")}
          text="History"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <YourVideosIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("yourvideos")}
          text="Your Videos"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <WatchLaterIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("watchlater")}
          text="Watch Later"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <LikedVideosIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("likedvideos")}
          text="Liked Videos"
        />
      </div>

      <div className="Tabs">
        <div className="icon">
          <ShowMoreIcon />
        </div>
        <SidebarTab
          setActiveTab={() => setActiveTab("showmore")}
          text="Show More"
        />
      </div>
    </div>
  );
};

export default Sidebar;
