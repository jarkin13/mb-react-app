import { ReactComponent as ExploreIcon } from "./icons/explore.svg";
import { ReactComponent as HistoryIcon } from "./icons/history.svg";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as LibraryIcon } from "./icons/library.svg";
import { ReactComponent as ShortsIcon } from "./icons/shorts.svg";
import { ReactComponent as SubscriptionsIcon } from "./icons/subscriptions.svg";
import { ReactComponent as YourVideosIcon } from "./icons/your-videos.svg";
import { ReactComponent as ShowMoreIcon } from "./icons/show-more.svg";
import { ReactComponent as WatchLaterIcon } from "./icons/watch-later.svg";
import { ReactComponent as LikeVideosIcon } from "./icons/liked-videos.svg";
import {
  SidebarContainer,
  SidebarLink,
  SidebarLinkContent,
  SidebarLinkIcon,
} from "./subcomponents";
import "./index.css";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink $active>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <HomeIcon />
          </SidebarLinkIcon>
          <span>Home</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <ExploreIcon />
          </SidebarLinkIcon>
          <span>Explore</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <ShortsIcon />
          </SidebarLinkIcon>
          <span>Shorts</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <SubscriptionsIcon />
          </SidebarLinkIcon>
          <span>Subscriptions</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <LibraryIcon />
          </SidebarLinkIcon>
          <span>Library</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <HistoryIcon />
          </SidebarLinkIcon>
          <span>History</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <YourVideosIcon />
          </SidebarLinkIcon>
          <span>Your Videos</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <WatchLaterIcon />
          </SidebarLinkIcon>
          <span>Watch Later</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <LikeVideosIcon />
          </SidebarLinkIcon>
          <span>Liked Videos</span>
        </SidebarLinkContent>
      </SidebarLink>
      <SidebarLink>
        <SidebarLinkContent>
          <SidebarLinkIcon>
            <ShowMoreIcon />
          </SidebarLinkIcon>
          <span>Show More</span>
        </SidebarLinkContent>
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
