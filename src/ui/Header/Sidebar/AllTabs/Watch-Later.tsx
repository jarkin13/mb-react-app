import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as WatchLaterIcon } from "../../icons/watch-later.svg";
import { ReactComponent as ActiveWatchLaterIcon } from "../../icons/activebaricons/activeWatchLater.svg";

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
