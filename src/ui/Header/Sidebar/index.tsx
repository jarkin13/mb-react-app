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
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import { useState } from "react";

import "./styles.css";

export default function curTab() {
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
