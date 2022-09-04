import SideTag from "../../../SideTag";
import React from "react";
import { ReactComponent as ExploreIcon } from "../../icons/baricons/explore.svg";
import { ReactComponent as ActiveExploreIcon } from "../../icons/activebaricons/activeExplore.svg";
const ExploreTab = () => {
  const [state, setState] = React.useState(<ExploreIcon />);

  function changeState() {
    setState(<ActiveExploreIcon />);
    changeState(!changeState);
  }
  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Explore" active />
    </div>
  );
};

export default ExploreTab;
