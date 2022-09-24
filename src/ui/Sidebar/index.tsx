import { MouseEvent, useState } from "react";
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
import { Icons, Textstyle } from "./subcomponents";
import SidebarTab from "./SidebarTab";

function ActiveSidebar() {
  const [home, setHome] = useState(() => <HomeIcon />);
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
    setExplore(() => <ExploreIcon />);
    setShorts(() => <ShortsIcon />);
    setSubscriptions(() => <SubscriptionsIcon />);
    setLibrary(() => <LibraryIcon />);
    setHistory(() => <HistoryIcon />);
    setWatchLater(() => <WatchLaterIcon />);
    setLikedVideos(() => <LikedVideosIcon />);
    setHome(() => <HomeIcon />);
  }

  return (
    <div>
      <div onClick={SetHomeTab}>
        <Icons>{home}</Icons>
        <SidebarTab
          text="Home"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetExploreTab}>
        <Icons>{explore}</Icons>
        <SidebarTab
          text="Explore"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetShortsTab}>
        <Icons>{shorts}</Icons>
        <SidebarTab
          text="Shorts"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetSubscriptionsTab}>
        <Icons>{subscriptions}</Icons>
        <SidebarTab
          text="Subscriptions"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetLibraryTab}>
        <Icons>{library}</Icons>
        <SidebarTab
          text="Library"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetHistoryTab}>
        <Icons>{history}</Icons>
        <SidebarTab
          text="History"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div>
        <Icons>
          <YourVideosIcon />
        </Icons>
        <Textstyle>Your Videos</Textstyle>
      </div>
      <div onClick={SetWatchLaterTab}>
        <Icons>{watchlater}</Icons>
        <SidebarTab
          text="Watch Later"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetLikedVideosTab}>
        <Icons>{likedvideos}</Icons>
        <SidebarTab
          text="Liked Videos"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
      <div onClick={SetShowMoreTab}>
        <Icons>{showmore}</Icons>
        <SidebarTab
          text="Show More"
          SetActiveTab={function (tab: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SidebarTab>
      </div>
    </div>
  );
}

export default ActiveSidebar;
