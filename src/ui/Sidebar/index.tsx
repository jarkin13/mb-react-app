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
import { ReactComponent as ActiveHomeIcon } from "./SideBarIcons/activehome.svg";
import { ReactComponent as ActiveExploreIcon } from "./SideBarIcons/activeexplore.svg";
import { ReactComponent as ActiveHistoryIcon } from "./SideBarIcons/activehistory.svg";
import { ReactComponent as ActiveLibraryIcon } from "./SideBarIcons/activelibrary.svg";
import { ReactComponent as ActiveLikedVideosIcon } from "./SideBarIcons/activelikedvideos.svg";
import { ReactComponent as ActiveShortsIcon } from "./SideBarIcons/activeshorts.svg";
import { ReactComponent as ActiveShowMoreIcon } from "./SideBarIcons/activeshowmore.svg";
import { ReactComponent as ActiveSubscriptionsIcon } from "./SideBarIcons/activesubscriptions.svg";
import { ReactComponent as ActiveWatchLaterIcon } from "./SideBarIcons/activewatchlater.svg";
import { Icons, SideBarBox, Textstyle } from "./subcomponents";

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
  }

  function SetExploreTab() {
    setExplore(() => <ActiveExploreIcon />);
  }

  function SetShortsTab() {
    setShorts(() => <ActiveShortsIcon />);
  }

  function SetSubscriptionsTab() {
    setSubscriptions(() => <ActiveSubscriptionsIcon />);
  }

  function SetLibraryTab() {
    setLibrary(() => <ActiveLibraryIcon />);
  }

  function SetHistoryTab() {
    setHistory(() => <ActiveHistoryIcon />);
  }

  function SetWatchLaterTab() {
    setWatchLater(() => <ActiveWatchLaterIcon />);
  }

  function SetLikedVideosTab() {
    setLikedVideos(() => <ActiveLikedVideosIcon />);
  }

  function SetShowMoreTab() {
    setShowMore(() => <ActiveShowMoreIcon />);
  }

  return (
    <div>
      <SideBarBox>
        <Icons>{home}</Icons>
        <Textstyle onClick={SetHomeTab}>Home</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{explore}</Icons>
        <Textstyle onClick={SetExploreTab}>Explore</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{shorts}</Icons>
        <Textstyle onClick={SetShortsTab}>Shorts</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{subscriptions}</Icons>
        <Textstyle onClick={SetSubscriptionsTab}>Subscriptions</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{library}</Icons>
        <Textstyle onClick={SetLibraryTab}>Library</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{history}</Icons>
        <Textstyle onClick={SetHistoryTab}>History</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{yourvideos}</Icons>
        <Textstyle>Your Videos</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{watchlater}</Icons>
        <Textstyle onClick={SetWatchLaterTab}>Watch Later</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{likedvideos}</Icons>
        <Textstyle onClick={SetLikedVideosTab}>Liked Videos</Textstyle>
      </SideBarBox>
      <SideBarBox>
        <Icons>{showmore}</Icons>
        <Textstyle onClick={SetShowMoreTab}>Show More</Textstyle>
      </SideBarBox>
    </div>
  );
}

export default ActiveSidebar;
