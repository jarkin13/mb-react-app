import { useState } from "react";
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
import { ReactComponent as ActiveHomeIcon } from "./SideBarIcons/activehome.svg";
import { ReactComponent as ActiveExploreIcon } from "./SideBarIcons/activeexplore.svg";
import { ReactComponent as ActiveHistoryIcon } from "./SideBarIcons/activehistory.svg";
import { ReactComponent as ActiveLibraryIcon } from "./SideBarIcons/activelibrary.svg";
import { ReactComponent as ActiveLikedVideosIcon } from "./SideBarIcons/activelikedvideos.svg";
import { ReactComponent as ActiveShortsIcon } from "./SideBarIcons/activeshorts.svg";
import { ReactComponent as ActiveShowMoreIcon } from "./SideBarIcons/activeshowmore.svg";
import { ReactComponent as ActiveSubscriptionsIcon } from "./SideBarIcons/activesubscriptions.svg";
import { ReactComponent as ActiveWatchLaterIcon } from "./SideBarIcons/activewatchlater.svg";
import { Icons, TabsClass, Textstyle, TopTabPanel } from "./subcomponents";
import SidebarTab from "./SidebarTab";
import "../Header/index.css";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");

  function handleClick(tab: string) {
    setActiveTab(tab);
  }

  return (
    <div className="SidebarAll">
      <TopTabPanel>
        <TabsClass onClick={() => handleClick("home")}>
          <Icons>
            {activeTab === "home" ? <ActiveHomeIcon /> : <HomeIcon />}
          </Icons>
          <SidebarTab text="Home" active={activeTab === "home"}></SidebarTab>
        </TabsClass>
        <TabsClass onClick={() => handleClick("explore")}>
          <Icons>
            {activeTab === "explore" ? <ActiveExploreIcon /> : <ExploreIcon />}
          </Icons>
          <SidebarTab
            text="Explore"
            active={activeTab === "explore"}
          ></SidebarTab>
        </TabsClass>
        <TabsClass onClick={() => handleClick("shorts")}>
          <Icons>
            {activeTab === "shorts" ? <ActiveShortsIcon /> : <ShortsIcon />}
          </Icons>
          <SidebarTab
            text="Shorts"
            active={activeTab === "shorts"}
          ></SidebarTab>
        </TabsClass>
        <TabsClass onClick={() => handleClick("subscriptions")}>
          <Icons>
            {activeTab === "subscriptions" ? (
              <ActiveSubscriptionsIcon />
            ) : (
              <SubscriptionsIcon />
            )}
          </Icons>
          <SidebarTab
            text="Subscriptions"
            active={activeTab === "subscriptions"}
          ></SidebarTab>
        </TabsClass>
      </TopTabPanel>
      <hr></hr>
      <TabsClass onClick={() => handleClick("library")}>
        <Icons>
          {activeTab === "library" ? <ActiveLibraryIcon /> : <LibraryIcon />}
        </Icons>
        <SidebarTab
          text="Library"
          active={activeTab === "library"}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={() => handleClick("history")}>
        <Icons>
          {activeTab === "history" ? <ActiveHistoryIcon /> : <HistoryIcon />}
        </Icons>
        <SidebarTab
          text="History"
          active={activeTab === "history"}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={() => handleClick("yourVideos")}>
        <Icons>
          {activeTab === "yourVideos" ? <YourVideosIcon /> : <YourVideosIcon />}
        </Icons>
        <SidebarTab
          text="Your Videos"
          active={activeTab === "yourVideos"}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={() => handleClick("watchLater")}>
        <Icons>
          {activeTab === "watchLater" ? (
            <ActiveWatchLaterIcon />
          ) : (
            <WatchLaterIcon />
          )}
        </Icons>
        <SidebarTab
          text="Watch Later"
          active={activeTab === "watchLater"}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={() => handleClick("likedVideos")}>
        <Icons>
          {activeTab === "likedVideos" ? (
            <ActiveLikedVideosIcon />
          ) : (
            <LikedVideosIcon />
          )}
        </Icons>
        <SidebarTab
          text="Liked Videos"
          active={activeTab === "likedVideos"}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={() => handleClick("showMore")}>
        <Icons>
          {activeTab === "showMore" ? <ActiveShowMoreIcon /> : <ShowMoreIcon />}
        </Icons>
        <SidebarTab
          text="Show More"
          active={activeTab === "showMore"}
        ></SidebarTab>
      </TabsClass>
    </div>
  );
}

export default Sidebar;
