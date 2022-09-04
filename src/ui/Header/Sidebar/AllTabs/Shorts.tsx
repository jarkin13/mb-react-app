import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as ShortsIcon } from "../../icons/baricons/shorts.svg";
import { ReactComponent as ActiveShortsIcon } from "../../icons/activebaricons/activeShorts.svg";

const ShortsTab = () => {
  const [state, setState] = React.useState(<ShortsIcon />);

  function changeState() {
    setState(<ActiveShortsIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Shorts" active />
    </div>
  );
};

export default ShortsTab;
