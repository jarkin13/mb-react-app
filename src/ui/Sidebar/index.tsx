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

function ActiveSidebar() {
  const [homeActive, setHomeActive] = useState(true);
  const [historyActive, setHistoryActive] = useState(false);
  const [exploreActive, setExploreActive] = useState(false);
  const [libraryActive, setLibraryActive] = useState(false);
  const [likedvideosActive, setLikedVideosActive] = useState(false);
  const [shortsActive, setShortsActive] = useState(false);
  const [showmoreActive, setShowMoreActive] = useState(false);
  const [watchlaterActive, setWatchLaterActive] = useState(false);
  const [subscriptionsActive, setSubscriptionsActive] = useState(false);
  const [home, setHome] = useState(() => <ActiveHomeIcon />);
  const [history, setHistory] = useState(() => <HistoryIcon />);
  const [explore, setExplore] = useState(() => <ExploreIcon />);
  const [library, setLibrary] = useState(() => <LibraryIcon />);
  const [likedvideos, setLikedVideos] = useState(() => <LikedVideosIcon />);
  const [shorts, setShorts] = useState(() => <ShortsIcon />);
  const [showmore, setShowMore] = useState(() => <ShowMoreIcon />);
  const [subscriptions, setSubscriptions] = useState(() => (
    <SubscriptionsIcon />
  ));
  const [watchlater, setWatchLater] = useState(() => <WatchLaterIcon />);

  function SetHomeTab() {
    setHome(() => <ActiveHomeIcon />);
    setActiveStateHome();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetExploreTab() {
    setExplore(() => <ActiveExploreIcon />);
    setActiveStateExplore();
    setHome(() => <HomeIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetShortsTab() {
    setShorts(() => <ActiveShortsIcon />);
    setActiveStateShorts();
    setExplore(() => <ExploreIcon />);
    setHome(() => <HomeIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetSubscriptionsTab() {
    setSubscriptions(() => <ActiveSubscriptionsIcon />);
    setActiveStateSubscriptions();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setHome(() => <HomeIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetLibraryTab() {
    setLibrary(() => <ActiveLibraryIcon />);
    setActiveStateLibrary();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setHome(() => <HomeIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetHistoryTab() {
    setHistory(() => <ActiveHistoryIcon />);
    setActiveStateHistory();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHome(() => <HomeIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetWatchLaterTab() {
    setWatchLater(() => <ActiveWatchLaterIcon />);
    setActiveStateWatchLater();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setHome(() => <HomeIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetLikedVideosTab() {
    setLikedVideos(() => <ActiveLikedVideosIcon />);
    setActiveStateLikedVideos();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setHome(() => <HomeIcon />);
    setShowMore(() => <ShowMoreIcon />);
  }
  function SetShowMoreTab() {
    setShowMore(() => <ActiveShowMoreIcon />);
    setActiveStateShowMore();
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setHome(() => <HomeIcon />);
  }

  function setActiveStateHome() {
    setHomeActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateExplore() {
    setExploreActive(true);
    setHomeActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateShorts() {
    setShortsActive(true);
    setExploreActive(false);
    setHomeActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateSubscriptions() {
    setSubscriptionsActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setHomeActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateLibrary() {
    setLibraryActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setHomeActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateHistory() {
    setHistoryActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHomeActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateWatchLater() {
    setWatchLaterActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setHomeActive(false);
    setLikedVideosActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateLikedVideos() {
    setLikedVideosActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setHomeActive(false);
    setShowMoreActive(false);
  }
  function setActiveStateShowMore() {
    setShowMoreActive(true);
    setExploreActive(false);
    setShortsActive(false);
    setSubscriptionsActive(false);
    setLibraryActive(false);
    setHistoryActive(false);
    setWatchLaterActive(false);
    setLikedVideosActive(false);
    setHomeActive(false);
  }
  return (
    <div>
      <TopTabPanel>
        <TabsClass onClick={SetHomeTab}>
          <Icons>{home}</Icons>
          <SidebarTab
            text="Home"
            active={homeActive}
            SetActiveTab={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></SidebarTab>
        </TabsClass>
        <TabsClass onClick={SetExploreTab}>
          <Icons>{explore}</Icons>
          <SidebarTab
            text="Explore"
            active={exploreActive}
            SetActiveTab={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></SidebarTab>
        </TabsClass>
        <TabsClass onClick={SetShortsTab}>
          <Icons>{shorts}</Icons>
          <SidebarTab
            text="Shorts"
            active={shortsActive}
            SetActiveTab={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></SidebarTab>
        </TabsClass>
        <TabsClass onClick={SetSubscriptionsTab}>
          <Icons>{subscriptions}</Icons>
          <SidebarTab
            text="Subscriptions"
            active={subscriptionsActive}
            SetActiveTab={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></SidebarTab>
        </TabsClass>
      </TopTabPanel>
      <hr></hr>
      <TabsClass onClick={SetLibraryTab}>
        <Icons>{library}</Icons>
        <SidebarTab
          text="Library"
          active={libraryActive}
          SetActiveTab={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={SetHistoryTab}>
        <Icons>{history}</Icons>
        <SidebarTab
          text="History"
          active={historyActive}
          SetActiveTab={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </TabsClass>
      <TabsClass>
        <Icons>
          <YourVideosIcon />
        </Icons>
        <Textstyle>Your Videos</Textstyle>
      </TabsClass>
      <TabsClass onClick={SetWatchLaterTab}>
        <Icons>{watchlater}</Icons>
        <SidebarTab
          text="Watch Later"
          active={watchlaterActive}
          SetActiveTab={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={SetLikedVideosTab}>
        <Icons>{likedvideos}</Icons>
        <SidebarTab
          text="Liked Videos"
          active={likedvideosActive}
          SetActiveTab={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </TabsClass>
      <TabsClass onClick={SetShowMoreTab}>
        <Icons>{showmore}</Icons>
        <SidebarTab
          text="Show More"
          active={showmoreActive}
          SetActiveTab={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </TabsClass>
    </div>
  );
}

export default ActiveSidebar;
