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
import { useState } from "react";

import "./styles.css";

export default function Tabs() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: {
    currentTarget: { classList: { toggle: (arg0: string) => void } };
  }) => {
    event.currentTarget.classList.toggle("bg-salmon");
  };

  return (
    <div className="Tabs">
      <button onClick={handleClick}>
        <HomeTab />
      </button>
      <button onClick={handleClick}>
        <ExploreTab />
      </button>

      <button onClick={handleClick}>
        <ShortsTab />
      </button>
      <button onClick={handleClick}>
        <SubscriptionsTab />
      </button>
      <button onClick={handleClick}>
        <LibraryTab />
      </button>
      <button onClick={handleClick}>
        <HistoryTab />
      </button>
      <button onClick={handleClick}>
        <YourVideosTab />
      </button>
      <button onClick={handleClick}>
        <WatchLaterTab />
      </button>
      <button onClick={handleClick}>
        <LikedVideosTab />
      </button>
      <button onClick={handleClick}>
        <ShowMoreTab />
      </button>
    </div>
  );
}
