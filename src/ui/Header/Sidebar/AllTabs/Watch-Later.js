import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as WatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/watch-later.svg";
import { ReactComponent as ActiveWatchLaterIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeWatchLater.svg";

const WatchLaterTab = () => {
  const [state, setState] = React.useState(<WatchLaterIcon />);

  function changeState() {
    setState(<ActiveWatchLaterIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Watch Later" active />
    </div>
  );
};

export default WatchLaterTab;
