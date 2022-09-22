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
import { Icons, Textstyle, ActiveTab } from "./subcomponents";

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
      <div>
        <Icons>{home}</Icons>
        <Textstyle className="Home" onClick={SetHomeTab}>
          Home
        </Textstyle>
      </div>
      <div>
        <Icons>{explore}</Icons>
        <Textstyle onClick={SetExploreTab}>Explore</Textstyle>
      </div>
      <div>
        <Icons>{shorts}</Icons>
        <Textstyle onClick={SetShortsTab}>Shorts</Textstyle>
      </div>
      <div>
        <Icons>{subscriptions}</Icons>
        <Textstyle onClick={SetSubscriptionsTab}>Subscriptions</Textstyle>
      </div>
      <div>
        <Icons>{library}</Icons>
        <Textstyle onClick={SetLibraryTab}>Library</Textstyle>
      </div>
      <div>
        <Icons>{history}</Icons>
        <Textstyle onClick={SetHistoryTab}>History</Textstyle>
      </div>
      <div>
        <Icons>
          <YourVideosIcon />
        </Icons>
        <Textstyle>Your Videos</Textstyle>
      </div>
      <div>
        <Icons>{watchlater}</Icons>
        <Textstyle onClick={SetWatchLaterTab}>Watch Later</Textstyle>
      </div>
      <div>
        <Icons>{likedvideos}</Icons>
        <Textstyle onClick={SetLikedVideosTab}>Liked Videos</Textstyle>
      </div>
      <div>
        <Icons>{showmore}</Icons>
        <Textstyle onClick={SetShowMoreTab}>Show More</Textstyle>
      </div>
    </div>
  );
}

export default ActiveSidebar;
