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
import { Tabs, Tab, TabList } from "react-tabs";

import "./styles.css";

function curTab() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <HomeTab />
        </Tab>
        <Tab>
          <ExploreTab />
        </Tab>
        <Tab>
          <ShortsTab />
        </Tab>
        <Tab>
          <SubscriptionsTab />
        </Tab>
        <Tab>
          <LibraryTab />
        </Tab>
        <Tab>
          <HistoryTab />
        </Tab>
        <Tab>
          <YourVideosTab />
        </Tab>
        <Tab>
          <WatchLaterTab />
        </Tab>
        <Tab>
          <LikedVideosTab />
        </Tab>
        <Tab>
          <ShowMoreTab />
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default curTab;
