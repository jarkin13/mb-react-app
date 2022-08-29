import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as WatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/watch-later.svg";

const WatchLaterTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <WatchLaterIcon />
      </div>
      <SideTag text="WatchLater" active />
    </div>
  );
};

export default WatchLaterTab;
