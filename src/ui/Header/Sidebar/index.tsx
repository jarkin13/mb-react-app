import ExploreTab from "./AllTabs/ExploreTab";
import HomeTab from "./AllTabs/HomeTab";
import LikedVideosTab from "./AllTabs/Liked-Videos";
import ShowMoreTab from "./AllTabs/Show-More";
import SubscriptionsTab from "./AllTabs/Subscriptions";
import WatchLaterTab from "./AllTabs/Watch-Later";
import YourVideosTab from "./AllTabs/Your-Videos";
import ShortsTab from "./AllTabs/Shorts";
import LibraryTab from "./AllTabs/Library";
import HistoryTab from "./AllTabs/HistoryTab";

const Sidebar = () => {
  return (
    <div>
      <HomeTab />
      <ExploreTab />
      <ShortsTab />
      <SubscriptionsTab />
      <LibraryTab />
      <HistoryTab />
      <YourVideosTab />
      <WatchLaterTab />
      <LikedVideosTab />
      <ShowMoreTab />
    </div>
  );
};

export default Sidebar;
